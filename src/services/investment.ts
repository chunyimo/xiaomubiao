import { IInvestment } from 'models/investment.model';
import { Model } from 'mongoose';
import { Inject, Service } from 'typedi';

@Service()
export default class InvestmentService {
  constructor(
    @Inject('InvestmentModel') private investmentModel: Model<IInvestment>
  ) {}

  public async add(
    newInvestment: Partial<IInvestment>
  ): Promise<IInvestment | undefined> {
    try {
      const investment = this.investmentModel.create(newInvestment);
      return investment;
    } catch (error) {}
  }
}