import bcrypt from 'bcrypt';
import { Router } from 'express';
import { HttpCode } from '~/common/enums';
import { tokenService, userService } from '~/services/services';
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const {
    JWT_ACCESS_SECRET_KEY,
    JWT_REFRESH_SECRET_KEY
} = process.env


const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();

  apiRouter.use('/auth', authRouter);

  authRouter.post("/login", async (_req, res) => {
    const { email, passwordToCompare } = _req.body;
    try {
        const user = await userService.getUserByEmail(email);
        if(user){
            const { id, password, role } = user;
            const match = await bcrypt.compare(passwordToCompare, password);
            if(match){
                const refreshToken = jwt.sign({ id, role }, <string>JWT_REFRESH_SECRET_KEY, {
                    expiresIn: "30d"
                });

                const accessToken = jwt.sign({ id, role }, <string>JWT_ACCESS_SECRET_KEY, {
                    expiresIn: "15m"
                });
    
                res.cookie("refresh_token", refreshToken, {
                    // secure: true,
                    httpOnly: true
                });
                const _id = await tokenService.createToken({id: user.id, refreshToken})
                res
                    .status(200)
                    .json({accessToken, refreshToken, _id});
                
            }
            else res
                .status(HttpCode.BAD_REQUEST)
                .json({data: "Wrong email or password"});
        }else{
            res
                .status(HttpCode.BAD_REQUEST)
                .json({data: "Wrong email or password"});    
        }
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  return authRouter;
};

export { initAuthApi };
