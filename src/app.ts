import express from "express";
import { initEnv } from "./utils/initWorkUtil";
import cors  from "cors";
import connectDB from "./utils/db";
// 初始化env,确保在程序启动其它任务前，该函数已经执行完成
initEnv();
const db = connectDB();
const app = express();
// cors 
app.use(cors());
const { PORT, HOST } = process.env;
app.get("/index", async (req: any, res: any) => {
	res.send({ code: 200, message: "index" });
});
db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`Sever listening at http://${HOST}:${PORT}`);
	});
});
