import app from "./app.js";
import { env } from "./config/env.js";
import { logger } from "./config/logger.js";
import { prisma } from "./config/prisma.js";

let isShuttingDown = false;

const server = app
  .listen(env.PORT, () => {
    logger.info(`${env.APP_NAME} is listening on port ${env.PORT}`);
  })
  .on("error", (error) => {
    logger.fatal({ err: error }, "Unable to start HTTP server");
    process.exit(1);
  });

const gracefulShutdown = (signal: NodeJS.Signals): void => {
  if (isShuttingDown) {
    return;
  }

  isShuttingDown = true;
  logger.warn({ signal }, "Shutdown signal received");

  const forceShutdownTimer = setTimeout(() => {
    logger.error("Forced shutdown triggered due to timeout");
    process.exit(1);
  }, env.SHUTDOWN_TIMEOUT_MS);

  server.close(async (error) => {
    clearTimeout(forceShutdownTimer);
    if (error) {
      logger.error({ err: error }, "Error while shutting down server");
      process.exit(1);
    }

    try {
      await prisma.$disconnect();
      logger.info("Server shutdown complete");
      process.exit(0);
    } catch (disconnectError) {
      logger.error({ err: disconnectError }, "Failed to disconnect Prisma during shutdown");
      process.exit(1);
    }
  });
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
process.on("unhandledRejection", (reason) => {
  logger.fatal({ err: reason }, "Unhandled rejection");
  gracefulShutdown("SIGTERM");
});
process.on("uncaughtException", (error) => {
  logger.fatal({ err: error }, "Uncaught exception");
  gracefulShutdown("SIGTERM");
});
