import { getRepository } from "typeorm";
import { InvestmentEntity } from "~/data/models/investmant.entity";

interface IInvestment {
  investorId: string;
  estateId: string;
  userId: string;
  fullName: string;
  companyName: string;
  country: string;
  city: string;
  street: string;
  zipcode: string;
  nameOfBank: string;
  nameOfCard: string;
  cardNumber: string;
  expirationYear: number;
  paymentAmount: number;
}

const maskCardNumber = (cardNumber: string) => {
  return cardNumber
    .split(' ')
    .map((item, index) => {
      if (index === 1 || index === 2) {
        return 'xxxx';
      }

      return item;
    })
    .join(' ');
}

export class InvestmentService {
  public async makeInvestment(investmentData: IInvestment): Promise<InvestmentEntity> {
    const investmentRepository = getRepository(InvestmentEntity);

    return investmentRepository.save({
      ...investmentRepository.create(investmentData),
      cardNumberMask: maskCardNumber(investmentData.cardNumber),
    });
  }
}
