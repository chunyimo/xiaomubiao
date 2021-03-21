import { Express } from "express";
import { models } from "../models";
import dependencyInjector from "./dependencyInjector";
import expressLoader from "./express";
import connectDB from "./mongoose";
const startupModules = async ({ app }: {app: Express}) => {
	try {
		// 连接数据库和初始化表
		const db = await connectDB();
		// 注入依赖
		await dependencyInjector({ models: models });

		// 启动 express
		await expressLoader({ app });
	} catch (error) {
    
	}
};

export default startupModules;