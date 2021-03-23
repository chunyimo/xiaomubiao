import moment from 'moment';
import { IInvestment, InvestmentTypeEnum } from '../models/investment.model';
import { Container } from 'typedi';
import { NextFunction, Request, Response, Router } from 'express';
import InvestmentService from '../services/investment';
const route = Router();
const investmentRouter = (app: Router) => {
	app.use('/investment', route);
	route.post('/add', async(req: Request, res: Response, next: NextFunction) => {
		try {
			const investmentServiceInstance = Container.get(InvestmentService);
			const newInvestment:Partial<IInvestment> = {
				name: 'ETH',
				type: InvestmentTypeEnum.BITCOIN,
				logo: 'https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/0ee04/eth-home-icon.png',
				value: 0.1,
				costUnitPrice: 10000,
				currentUnitPrice: 11000,
				proportion: 0.05,
				return: 0.05,
				investTime: new Date(moment.now()),
				createTime: new Date(moment.now())
			};
			investmentServiceInstance.add(newInvestment);
		} catch (error) {
      
		}
	});
};

export default investmentRouter;