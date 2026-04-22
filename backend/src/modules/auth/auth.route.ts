import { Router } from "express";
import { login, logout, logoutAll, me, refresh, register } from "./auth.controller.js";
import { loginSchema, registerSchema } from "./auth.validation.js";
import { validateBody } from "../../common/middlewares/validate.middleware.js";
import { requireAuth } from "../../common/middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/register", validateBody(registerSchema), register);
authRouter.post("/login", validateBody(loginSchema), login);
authRouter.post("/refresh", refresh);
authRouter.post("/logout",requireAuth, logout);
authRouter.post("/logout-all", requireAuth, logoutAll);
authRouter.get("/me", requireAuth, me);

export default authRouter;
