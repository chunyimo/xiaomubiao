
import { Model } from 'mongoose';
import { Inject, Service } from 'typedi';
import { IBill } from '../models/bill.model';

@Service()
export default class BillService {
  constructor(@Inject('BillModel') private billModel: Model<IBill>) {}

  public async add(newBill: Partial<IBill>): Promise<IBill | undefined> {
    try {
      const bill = this.billModel.create(newBill);
      return bill;
    } catch (error) {
      console.log('error: ', error);
    }
  }
}