const { Router } = require("express");
const { registerUser } = require("../controllers/auth.controller");
const authRouter = Router();

authRouter.post("/register", registerUser);

module.exports = authRouter;
