import { Router } from 'express';
import { ApiPath, HttpCode } from '~/common/enums';
import { InvestmentsApiPath } from '~/common/enums/api/investments-api-path.enum';
import { investmentService } from '~/services/services';

export const initInvestmentApi = (apiRouter: Router): Router => {
  const investmentRouter = Router();

  apiRouter.use(ApiPath.INVESTMENTS, investmentRouter);

  investmentRouter.post(InvestmentsApiPath.ROOT, async (_req, res) => {
    try {
      const investment = await investmentService.makeInvestment(_req.body);
      res.status(HttpCode.OK).json(investment);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  return investmentRouter;
}