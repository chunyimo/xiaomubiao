import { forEach } from "lodash";
import { Model } from "mongoose";
import AssetModel from "./asset.model";
import BillModel from "./bill.model";
import InvestmentModel from "./investment.model";
import PlanBModel from "./planB.model";
import UserModel from "./user.model";

export const models: Model<any>[] = [
	AssetModel,
	BillModel,
	InvestmentModel, 
	PlanBModel,
	UserModel
];

const initModel = () => {
	forEach(models, model => {
		model.createCollection();
	});
};

export default initModel;