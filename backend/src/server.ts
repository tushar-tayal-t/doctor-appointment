import app from "./app.js";
import { env } from "./config/env.js";
import { logger } from "./config/logger.js";
import { prisma } from "./config/prisma.js";

const server = app.listen(env.PORT, () => {
  logger.info(`${env.APP_NAME} is listening on port ${env.PORT}`);
});

const gracefulShutdown = (signal: NodeJS.Signals): void => {
  logger.warn({ signal }, "Shutdown signal received");
  server.close(async (error) => {
    if (error) {
      logger.error({ err: error }, "Error while shutting down server");
      process.exit(1);
    }

    await prisma.$disconnect();
    logger.info("Server shutdown complete");
    process.exit(0);
  });
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
