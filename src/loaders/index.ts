import { Express } from "express";
import { models } from "../models";
import dependencyInjector from "./dependencyInjector";
import connectDB from "./mongoose";
const startupModules = async ({ app }: {app: Express}) => {
	try {
		const db = await connectDB();
		await dependencyInjector({ models: models });
	} catch (error) {
    
	}
};

export default startupModules;