import { Inject, Service } from "typedi";
import { IBill } from "../models/bill.model";

@Service()
export default class BillService {
	constructor(
    @Inject("BillModel") private billModel: Models.BillModel,
	){}

	public async add(newBill: IBill):Promise<IBill | undefined> {
		try {
			const bill = this.billModel.create(newBill);
			return bill;
		} catch (error) {
      
		}
	}
}