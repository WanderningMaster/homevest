import { Response, NextFunction} from "express";
import { HttpCode } from "~/common/enums";
import { logger, tokenService } from "~/services/services";


export function isAuth(_req: any, res: Response, next: NextFunction){
    try {
        const authHeader = _req.headers.authorization;
        if(!authHeader){
            res.status(401).json({error: "Unauthorized"});
        }

        const accessToken = authHeader?.split(' ')[1] as string;
        console.log(accessToken);
        if(!accessToken){
            res.status(401).json({error: "Unauthorized"});
        }
        const userData = tokenService.validateAccessToken(accessToken);
        _req.user = userData;
        next();
    } catch (error: any) {
        logger.error(error.message);
        res.status(HttpCode.BAD_REQUEST).json({error: error.message});
    }
}

