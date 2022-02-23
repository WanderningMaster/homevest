import { Router } from 'express';
import get from 'lodash/get';
import { ApiPath, HttpCode } from '~/common/enums';
import { InvestmentsApiPath } from '~/common/enums/api/investments-api-path.enum';
import { isAuth } from '~/middlewares';
import { investmentService } from '~/services/services';
import { MakeInvestmentInputSchema } from '~/common/input-models/make-investment-input-schema';
import { isInvestor } from '~/middlewares/Auth/isInvestor.middleware';

export const initInvestmentApi = (apiRouter: Router): Router => {
  const investmentRouter = Router();

  apiRouter.use(ApiPath.INVESTMENTS, investmentRouter);

  investmentRouter.post(InvestmentsApiPath.ROOT, isAuth, isInvestor, async (req, res) => {
    try {
      const userId = get(req, 'user.id');
      const estateId = get(req, 'params.estateId');
      await MakeInvestmentInputSchema.validate(req.body, {
        abortEarly: false,
        strict: true,
      });

      const investment = await investmentService.makeInvestment({
        ...req.body,
        userId,
        estateId,
      });
      res.status(HttpCode.OK).json(investment);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  return investmentRouter;
}