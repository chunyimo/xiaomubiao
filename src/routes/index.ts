import { forEach } from 'lodash';
import { Router } from 'express';
import userRouter from './user.router';
import billRouter from './bill.router';
import investmentRouter from './investment.router';
const routers: Array<(app: Router) => void> = [
  userRouter,
  billRouter,
  investmentRouter
];
const routersRegister = () => {
  const app = Router();
  forEach(routers, router => {
    router(app);
  });
  return app;
};

export default routersRegister;