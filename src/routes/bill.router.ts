import { Request, Response, NextFunction, Router } from "express";
const route = Router();
const billRouter = (app: Router) => {
	app.use("/bill", route);
	route.post("/add", async (req: Request, res: Response, next: NextFunction) => {
		try {
			console.info("add bill");
		} catch (e) {
     
		}
	},
	);
};

export default billRouter;