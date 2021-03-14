import dotenv from "dotenv";
import chalk from "chalk";
import path from "path";

export const initEnv = () => {
	dotenv.config({ path: path.resolve(__dirname, "../../.env") });
	console.log(chalk.green("[init] Init env successfully!"));
};