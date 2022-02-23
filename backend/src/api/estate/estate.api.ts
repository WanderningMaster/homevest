import { isDeveloper } from '~/middlewares/Auth/isDeveloper.middleware';
import { isAuth } from '~/middlewares';
import { Router } from 'express';
import { ApiPath, HttpCode, EstatesApiPath } from '~/common/enums';
import { estateService } from '~/services/services';

const initEstateApi = (apiRouter: Router): Router => {
  const estateRouter = Router();

  apiRouter.use(ApiPath.ESTATES, estateRouter);

  estateRouter.get(EstatesApiPath.ROOT, isAuth, async (_req, res) => {
    try {
      const estates = await estateService.getAllEstates()
      res.status(HttpCode.OK).json(estates);
    } catch(error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  estateRouter.get(EstatesApiPath.$ID, isAuth, async (_req, res) => {
    try {
      const estate = await estateService.getEstateById(_req.params.id);
      res.status(HttpCode.OK).json(estate);
    } catch(error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  estateRouter.post(EstatesApiPath.ROOT, isAuth, isDeveloper, async (_req, res) => {
    try {
      const estate = await estateService.createNewEstate(_req.body);
      res.status(HttpCode.OK).json(estate);
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  estateRouter.put(EstatesApiPath.$ID, isAuth, isDeveloper,async (_req, res) => {
    try {
      const estate = await estateService.updateEstate(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(estate);
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  estateRouter.delete(EstatesApiPath.$ID, isAuth, isDeveloper, async (_req, res) => {
    try {
      await estateService.deleteEstate(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json();
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });


  return estateRouter;
};

export { initEstateApi };
