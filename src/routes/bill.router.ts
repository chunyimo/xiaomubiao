import { Container } from 'typedi';
import { Request, Response, NextFunction, Router } from 'express';
import BillService from '../services/bill';
import { BillTypeEnum } from '../models/bill.model';
import moment from 'moment';
const route = Router();
const billRouter = (app: Router) => {
	app.use('/bill', route);
	route.post('/add', async (req: Request, res: Response, next: NextFunction) => {
		try {
			const billServiceInstance = Container.get(BillService);
			const newBill = {
				type: BillTypeEnum.INCOME,
				project: '饮食',
				account: 35,
				time: new Date(moment.now()),
				createTime: new Date(moment.now()),
			};
			const bill = await billServiceInstance.add(newBill);
			res.send(bill);
		} catch (e) {
			console.log('error: ', e);
			res.sendStatus(500).end();
		}
	},
	);
};

export default billRouter;