import { Router } from 'express';
import { AppConfig } from '~/common/enums';
import { initEstateApi } from './estate/estate.api';
import { initUserApi } from './user/user.api';
import { initInvestorApi } from './user/investor.api';
import { initCompanyApi } from './user/company.api';

const apis = [initUserApi, initInvestorApi, initCompanyApi, initEstateApi];

const initApi = (app: Router): Router => {
  const apiRouter = Router();
  app.use(AppConfig.API_V1_PREFIX, apiRouter);

  apis.forEach((api) => api(apiRouter));

  return apiRouter;
};

export { initApi };
