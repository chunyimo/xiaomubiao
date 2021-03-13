import mongoose, { Schema, Document } from "mongoose";
export enum PlanBStateEnum {
  ON = "ON",
  OFF = "OFF",
}
export enum PlanBTrendEnum {
  UP = "UP",
  DOWN = "DOWN",
}
export interface IPlanB extends Document {
  name: String;
  targetName: String;
  State: PlanBStateEnum;
  startTime: Date;
  trend: PlanBTrendEnum;
  anchor: Number;
  targetPoint: Number;
  resistanceLevel: { type: Number; min: 1; max: 5 };
  pushForceLevel: { type: Number; min: 1; max: 5 };
  intervalTime: Date;
  createTime: Date;
}

const PlanBSchema: Schema = new Schema({
  name: String,
  targetName: String,
  State: { type: String, enum: [PlanBStateEnum.ON, PlanBStateEnum.OFF] },
  startTime: Date,
  trend: { type: String, enum: [PlanBTrendEnum.UP, PlanBTrendEnum.DOWN] },
  anchor: Number,
  targetPoint: Number,
  resistanceLevel: { type: Number, min: 1, max: 5 },
  pushForceLevel: { type: Number, min: 1, max: 5 },
  intervalTime: Date,
  createTime: Date,
});

export default mongoose.model<IPlanB>("PlanB", PlanBSchema);
