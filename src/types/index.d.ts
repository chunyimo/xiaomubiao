import { Model } from "mongoose";
import { IUser } from "../models/user.model";

declare global {
  namespace Models {
    export type UserModel = Model<IUser>
  }
}