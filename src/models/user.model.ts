import { IPlanB } from "./planB.model";
import { IInvestment } from "./investment.model";
import mongoose, { Schema, Document } from "mongoose";
import { IBill } from "./bill.model";
import { IAsset } from "./asset.model";
export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  profilePhoto: string;
  bills: [IBill["_id"]];
  investments: [IInvestment["_id"]];
  assets: [IAsset["_id"]];
  planBs: [IPlanB["_id"]];
  creatTime: Date;
}

const UserSchema: Schema = new Schema({
	username: String,
	password: String,
	email: { type: String, unique: true },
	profilePhoto: String,
	bills: [{ type: Schema.Types.ObjectId, ref: "Bill" }],
	investments: [{ type: Schema.Types.ObjectId, ref: "Investment" }],
	assets: [{ type: Schema.Types.ObjectId, ref: "Asset" }],
	planBs: [{ type: Schema.Types.ObjectId, ref: "PlanB" }],
	creatTime: Date,
});

export default mongoose.model<IUser>("User", UserSchema);
