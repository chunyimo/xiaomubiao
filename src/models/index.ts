import { forEach } from 'lodash';
import { Model } from 'mongoose';
import AssetModel from './asset.model';
import BillModel from './bill.model';
import InvestmentModel from './investment.model';
import PlanBModel from './planB.model';
import UserModel from './user.model';

export const models: Array<{name: string, model: Model<any>}> = [
	{ name: 'AssetModel', model:AssetModel },
	{ name: 'BillModel', model:BillModel },
	{ name: 'InvestmentModel', model:InvestmentModel },
	{ name: 'PlanBModel', model:PlanBModel },
	{ name: 'UserModel', model:UserModel },
];

const initModel = () => {
	forEach(models, m => {
		m.model.createCollection();
	});
};

export default initModel;