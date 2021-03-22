import { Model } from "mongoose";
import { Inject, Service } from "typedi";
import { IBill } from "../models/bill.model";
import BillModel from "../models/bill.model";

@Service()
export default class BillService {
	constructor(
    @Inject("BillModel") private billModel: Model<IBill>
	){}

	public async add(newBill: Partial<IBill>):Promise<IBill | undefined> {
		try {
			const bill = BillModel.create(newBill);
			console.info("bill: ", bill);
			return bill;
		} catch (error) {
			console.log("error: ", error);
		}
	}
}