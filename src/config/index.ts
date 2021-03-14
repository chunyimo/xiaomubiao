import dotenv from "dotenv";
import chalk from "chalk";
import path from "path";

export const initEnv = () => {
	const envFound = dotenv.config({ path: path.resolve(__dirname, "../../.env") });
	if (envFound.error) {
		console.error(chalk.red("[init] Init env failed!"));
	}
	console.log(chalk.green("[init] Init env successfully!"));
};

initEnv();
const config = {
	HOST: process.env.HOST,
	PORT: process.env.PORT,
	DB_NAME: process.env.DB_NAME,
	DB_HOST: process.env.DB_HOST,
	DB_PORT: process.env.DB_PORT,
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,

	api: {
		prefix: "/api",
	},
};

export default config;