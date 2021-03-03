import express from 'express';
import { initEnv } from './utils/initWorkUtil';
import cors  from 'cors';
initEnv();
const app = express();
// cors 
app.use(cors())
const {PORT, HOST} = process.env;
app.get("/index", async (req: any, res: any) => {
  res.send({code: 200, message: 'index'})
})
app.listen(PORT, () => {
  console.log(`Sever listening at http://${HOST}:${PORT}`)
})
