import mongoose, { Schema, Document } from "mongoose";
export enum InvestmentTypeEnum {
  STOCK = "STOCK",
  BONDS = "BONDS",
  BITCOIN = "BITCOIN",
  OTHER = "OTHER",
}
export interface IInvestment extends Document {
  name: string;
  type: InvestmentTypeEnum;
  logo: string;
  value: number;
  costUnitPrice: number;
  currentUnitPrice: number;
  proportion: number;
  return: number;
  investTime: Date;
  createTime: Date;
}

const InvestmentSchema: Schema = new Schema({
	name: String,
	type: {
		type: String,
		enum: [
			InvestmentTypeEnum.STOCK,
			InvestmentTypeEnum.BONDS,
			InvestmentTypeEnum.BITCOIN,
			InvestmentTypeEnum.OTHER,
		],
	},
	logo: String,
	value: Number,
	costUnitPrice: Number,
	currentUnitPrice: Number,
	proportion: Number,
	return: Number,
	investTime: Date,
	createTime: Date,
});

export default mongoose.model<IInvestment>("Investment", InvestmentSchema);
