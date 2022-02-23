import { isDeveloper } from '~/middlewares/Auth/isDeveloper.middleware';
import { Router } from 'express';
import { ApiPath, HttpCode, CompaniesApiPath } from '~/common/enums';
import { isAuth } from '~/middlewares';
import { companyService } from '~/services/services';

const initCompanyApi = (apiRouter: Router): Router => {
  const companyRouter = Router();

  apiRouter.use(ApiPath.COMPANIES, companyRouter);

  companyRouter.get(CompaniesApiPath.ROOT, isAuth, async (_req, res) => {
    try {
      const companies = await companyService.getAllCompanies();
      res.status(HttpCode.OK).json(companies);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  companyRouter.get(CompaniesApiPath.$ID, isAuth, async (_req, res) => {
    try {
      const company = await companyService.getCompanyById(_req.params.id);
      res.status(HttpCode.OK).json(company);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  companyRouter.post(CompaniesApiPath.ROOT, isAuth, isDeveloper, async (_req, res) => {
    try {
      const company = await companyService.createCompany(_req.body);
      res.status(HttpCode.OK).json(company);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  companyRouter.put(CompaniesApiPath.$ID, isAuth, isDeveloper, async (_req, res) => {
    try {
      const updateResult = await companyService.updateCompany(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(updateResult);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  companyRouter.delete(CompaniesApiPath.$ID, isAuth, isDeveloper, async (_req, res) => {
    try {
      const deleteResult = await companyService.deleteCompany(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json(deleteResult);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });
  companyRouter.get(CompaniesApiPath.GET_USER, isAuth, async (_req, res) => {
    try {
      const user = await companyService.getUser(_req.params.id);
      res.status(HttpCode.OK).json(user[0].user);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });
  return companyRouter;
};

export { initCompanyApi };
