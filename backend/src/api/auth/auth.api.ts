import { Router } from 'express';
import { authService, logger } from '~/services/services';
import { ApiPath, HttpCode, AuthApiPath } from '~/common/enums';


const initAuthApi = (apiRouter: Router): Router => {
    const authRouter = Router();

    apiRouter.use(ApiPath.AUTH, authRouter);

    authRouter.post(AuthApiPath.REG, async (_req, res) => {
        try {
            const user = await authService.registerUser(_req.body);
            res.status(HttpCode.OK).json(user);
        } catch(error: any) {
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({error: error.message});
        }
    });

    authRouter.post(AuthApiPath.LOGIN, async (_req, res) => {
        const { email, passwordToCompare } = _req.body;
        try {
            const { accessToken, refreshToken } = await authService.loginUser(email, passwordToCompare);
            res.cookie("refresh_token", refreshToken, {
                // secure: true,
                maxAge: 30*24*60*60*1000,
                httpOnly: true
            });
            res
                .status(HttpCode.OK)
                .json({accessToken, refreshToken});    
        } catch(error: any) {
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({error: error.message});
        }
    });

    authRouter.get(AuthApiPath.$ACTIVATE, async (_req, res) => {
        try{
            const link = _req.params.link;
            const activatedUser = await authService.activateUser(link);

            res
                .status(HttpCode.OK)
                .json({activatedUser});             
        }catch(error: any){
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({error: error.message});
        }
    });

    authRouter.post(AuthApiPath.LOGOUT, async (_req, res) => {
        try {
            const {refresh_token} = _req.cookies;
            const token = await authService.logoutUser(refresh_token);
            res.clearCookie("refresh_token");

            res.status(HttpCode.OK).json({token});
        } catch (error: any) {
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({error: error.message});
        }
    });

    authRouter.get(AuthApiPath.REFRESH, async (_req, res) => {
        try{
            const { refresh_token } = _req.cookies;
            const { refreshToken, accessToken } = await authService.refresh(refresh_token);
            res.cookie("refresh_token", refreshToken, {
                // secure: true,
                maxAge: 30*24*60*60*1000,
                httpOnly: true
            });

            res
                .status(HttpCode.OK)
                .json({accessToken, refreshToken});  
        }catch(error: any){
            logger.error(error.message);
            res.status(HttpCode.BAD_REQUEST).json({error: error.message});
        }
    });

    return authRouter;
};

export { initAuthApi };
