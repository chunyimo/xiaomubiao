import mongoose, { Schema, Document } from "mongoose";
export enum AssetTypeEnum {
  DEMAND_SAVINGS = "DEMAND_SAVINGS",
  FIXED_DEPOSIT = "FIXED_DEPOSIT",
  EMERGENCY_SAVINGS = "EMERGENCY_SAVINGS",
  INVESTED = "INVESTED",
  INVESTING = "INVESTING",
}
export interface IAsset extends Document {
  name: string;
  logo: string;
  type: AssetTypeEnum;
  where: string;
  value: number;
  createTime: string;
}
const AssetSchema: Schema = new Schema({
	name: String,
	logo: String,
	type: {
		type: String,
		enum: [
			AssetTypeEnum.DEMAND_SAVINGS,
			AssetTypeEnum.FIXED_DEPOSIT,
			AssetTypeEnum.EMERGENCY_SAVINGS,
			AssetTypeEnum.INVESTED,
			AssetTypeEnum.INVESTING,
		],
	},
	where: String,
	value: Number,
	createTime: String,
});

export default mongoose.model<IAsset>("Asset", AssetSchema);
