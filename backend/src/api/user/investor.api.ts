import { Router } from 'express';
import { ApiPath, HttpCode, InvestorsApiPath } from '~/common/enums';
import { investorService } from '~/services/services';

const initInvestorApi = (apiRouter: Router): Router => {
  const investorRouter = Router();

  apiRouter.use(ApiPath.INVESTORS, investorRouter);

  investorRouter.get(InvestorsApiPath.ROOT, async (_req, res) => {
    try {
      const investors = await investorService.getAllInvestors();
      res.status(HttpCode.OK).json(investors);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  investorRouter.get(InvestorsApiPath.$ID, async (_req, res) => {
    try {
      const investor = await investorService.getInvestorById(_req.params.id);
      res.status(HttpCode.OK).json(investor);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  investorRouter.post(InvestorsApiPath.ROOT, async (_req, res) => {
    try {
      const investor = await investorService.createNewInvestor(_req.body);
      res.status(HttpCode.OK).json(investor);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  investorRouter.put(InvestorsApiPath.$ID, async (_req, res) => {
    try {
      const updateResult = await investorService.updateInvestor(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(updateResult);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  investorRouter.delete(InvestorsApiPath.$ID, async (_req, res) => {
    try {
      const deleteResult = await investorService.deleteInvestor(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json(deleteResult);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });
  investorRouter.get(InvestorsApiPath.GET_USER, async (_req, res) => {
    try {
      const user = await investorService.getUser(_req.params.id);
      res.status(HttpCode.OK).json(user[0].user);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });
  return investorRouter;
};

export { initInvestorApi };
