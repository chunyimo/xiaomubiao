import mongoose, { Schema, Document } from 'mongoose';
export enum BillTypeEnum {
  INCOME = 'INCOME',
  EXPENDITURE = 'EXPENDITURE',
}
export interface IBill extends Document {
  type: BillTypeEnum;
  project: string;
  account: number;
  time: Date;
  createTime: Date;
}

const BillSchema: Schema = new Schema({
	type: { type: String, enum: [BillTypeEnum.INCOME, BillTypeEnum.EXPENDITURE] },
	project: String,
	account: String, 
	time: Date,
	createTime: Date,
});

export default mongoose.model<IBill>('Bill', BillSchema);
