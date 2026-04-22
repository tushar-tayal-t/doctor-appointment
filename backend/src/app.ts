import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import pinoHttp from "pino-http";
import { env } from "./config/env.js";
import { logger } from "./config/logger.js";
import { errorHandler } from "./common/middlewares/error.middleware.js";
import { notFoundHandler } from "./common/middlewares/not-found.middleware.js";
import apiRouter from "./routes/index.js";
import cookieParser from "cookie-parser";

const app = express();
app.disable("x-powered-by");
app.set("trust proxy", env.TRUST_PROXY);

app.use(helmet());
app.use(
  cors({
    origin: env.CORS_ORIGIN === "*" ? true : env.CORS_ORIGIN.split(","),
    credentials: true
  })
);
app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
// app.use(
//   pinoHttp({
//     logger,
//     customSuccessMessage: (_req, res) => `${res.statusCode} request completed`,
//     customErrorMessage: (_req, res) => `${res.statusCode} request failed`,
//     serializers: {
//       req(req) {
//         return {
//           id: req.id,
//           method: req.method,
//           url: req.url
//         };
//       },
//       res(res) {
//         return {
//           statusCode: res.statusCode
//         };
//       }
//     }
//   })
// );

app.get("/", (_req, res) => {
  res.json({
    service: env.APP_NAME,
    status: "running"
  });
});

app.use("/api/v1", apiRouter);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
