import { Router } from 'express';
import { ApiPath, HttpCode, AppartmentsApiPath } from '~/common/enums';
import { appartmentService } from '~/services/services';

const initAppartmentApi = (apiRouter: Router): Router => {
  const appartmentRouter = Router();

  apiRouter.use(ApiPath.APPARTMENTS, appartmentRouter);

  appartmentRouter.get(AppartmentsApiPath.ROOT, async (_req, res) => {
    try {
      const appartments = await appartmentService.getAllAppartments();
      res.status(HttpCode.OK).json(appartments);
    } catch(error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  appartmentRouter.get(AppartmentsApiPath.$ID, async (_req, res) => {
    try {
      const appartment = await appartmentService.getAppartmentById(_req.params.id);
      res.status(HttpCode.OK).json(appartment);
    } catch(error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  appartmentRouter.post(AppartmentsApiPath.ROOT, async (_req, res) => {
    try {
      const appartment = await appartmentService.createAppartment(_req.body);
      res.status(HttpCode.OK).json(appartment);
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  appartmentRouter.put(AppartmentsApiPath.$ID, async (_req, res) => {
    try {
      const updateResult = await appartmentService.updateAppartment(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(updateResult);
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  appartmentRouter.delete(AppartmentsApiPath.$ID, async (_req, res) => {
    try {
      const deleteResult = await appartmentService.deleteAppartment(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json(deleteResult);
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });
  appartmentRouter.get(AppartmentsApiPath.GET_ESTATE, async (_req, res) => {
    try {
      const estate = await appartmentService.getEstate(_req.params.id);
      res.status(HttpCode.OK).json(estate[0].estate);
    } catch(error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });
  return appartmentRouter;
};

export { initAppartmentApi };
