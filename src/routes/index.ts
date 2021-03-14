import { forEach } from "lodash";
import { Router } from "express";
import userRouter from "./user.router";
const routers = [
	userRouter
];
const routersRegister = () => {
	const app = Router();
	forEach(routers, router => {
		router(app);
	});
	return app;
};

export default routersRegister;