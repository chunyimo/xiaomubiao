import 'reflect-metadata';
import express from 'express';
import startupModules from './loaders';
import chalk from 'chalk';
import config from './config';


const startServer = async () => {
	try {
		const app = express();
		const { PORT, HOST } = config;
		await startupModules({ app });
		app.listen(PORT, () => {
			console.log(`Sever listening at http://${HOST}:${PORT}`);
		}).on('error', err => {
			console.log(chalk.red('Start server failed: ', err));
		});
	} catch (error) {
		
	}
};

startServer();