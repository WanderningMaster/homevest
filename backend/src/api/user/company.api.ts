import { Router } from 'express';
import { ApiPath, HttpCode, CompaniesApiPath } from '~/common/enums';
import { companyService } from '~/services/services';

const initCompanyApi = (apiRouter: Router): Router => {
  const companyRouter = Router();

  apiRouter.use(ApiPath.COMPANIES, companyRouter);

  /**
   * @openapi
   * /api/v1/companies:
   *  get:
   *    summary: Return a list of companies
   *    tags:
   *      - Company
   *    responses:
   *      200:
   *        description: Successful response
   */
  companyRouter.get(CompaniesApiPath.ROOT, async (_req, res) => {
    try {
      const companies = await companyService.getAllCompanies();
      res.status(HttpCode.OK).json(companies);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/companies/{id}:
   *  get:
   *    summary: Return a company by id
   *    tags:
   *      - Company
   *    parameters:
   *      - in: path
   *        name: id
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  companyRouter.get(CompaniesApiPath.$ID, async (_req, res) => {
    try {
      const company = await companyService.getCompanyById(_req.params.id);
      res.status(HttpCode.OK).json(company);
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/companies:
   *  post:
   *    summary: Create a new company
   *    tags:
   *      - Company
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              userId:
   *                type: string
   *              companyName:
   *                type: string
   *              companyLogo:
   *                type: string
   *              dateOfEstablishment:
   *                type: string
   *              website:
   *                type: string
   *              address:
   *                type: string
   *              phoneNumber:
   *                type: string
   *              documents:
   *                type: string
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  companyRouter.post(CompaniesApiPath.ROOT, async (_req, res) => {
    try {
      const company = await companyService.createCompany(_req.body);
      res.status(HttpCode.OK).json(company);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/companies/{id}:
   *  put:
   *    summary: Update a company
   *    tags:
   *      - Company
   *    parameters:
   *      - in: path
   *        name: id
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              userId:
   *                type: string
   *              companyName:
   *                type: string
   *              companyLogo:
   *                type: string
   *              dateOfEstablishment:
   *                type: string
   *              website:
   *                type: string
   *              address:
   *                type: string
   *              phoneNumber:
   *                type: string
   *              documents:
   *                type: string
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  companyRouter.put(CompaniesApiPath.$ID, async (_req, res) => {
    try {
      const updateResult = await companyService.updateCompany(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(updateResult);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/companies/{id}:
   *  delete:
   *    summary: Delete an appartment by id
   *    tags:
   *      - Company
   *    parameters:
   *      - in: path
   *        name: id
   *    responses:
   *      204:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  companyRouter.delete(CompaniesApiPath.$ID, async (_req, res) => {
    try {
      const deleteResult = await companyService.deleteCompany(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json(deleteResult);
    } catch (error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  /**
   * @openapi
   * /api/v1/companies/{id}/user:
   *  get:
   *    summary: Return a user by company id
   *    tags:
   *      - Company
   *    parameters:
   *      - in: path
   *        name: id
   *    responses:
   *      200:
   *        description: Successful response
   *      404:
   *        description: Not found response
   */
  companyRouter.get(CompaniesApiPath.GET_USER, async (_req, res) => {
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
