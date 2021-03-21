import { Model } from "mongoose";
import { IBill } from "../models/bill.model";
import { IUser } from "../models/user.model";

declare global {
  namespace Models {
    export type UserModel = Model<IUser>
    export type BillModel = Model<IBill>
  }
}