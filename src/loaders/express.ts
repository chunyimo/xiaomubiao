import cors from "cors";
import express, { Express } from "express";
import config from "../config";
import routersRegister from "../routes";
const expressLoader = async ({ app }: {app: Express}) => {
	app.get("/status", (req, res) => {
		res.sendStatus(200).end();
	});
	app.head("/status", (req, res) => {
		res.sendStatus(200).end();
	});

	app.use(cors(config.corsOptions));
	app.use(express.json());
  
	app.use(config.api.prefix, routersRegister());

	// todo error handler
  
};

export default expressLoader;