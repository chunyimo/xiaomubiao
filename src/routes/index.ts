import { forEach } from "lodash";
import { Router } from "express";
import userRouter from "./user.router";
import billRouter from "./bill.router";
const routers = [
	userRouter,
	billRouter,
];
const routersRegister = () => {
	const app = Router();
	forEach(routers, router => {
		router(app);
	});
	return app;
};

export default routersRegister;