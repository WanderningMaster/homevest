import { userService } from "../services";
import { UserEntity } from '../../data/models/user.entity';
// import { UpdateResult, DeleteResult, getCustomRepository } from "typeorm";
import { IUser } from '~/common/interfaces';

class AuthService {

    public registerUser(data: IUser):Promise<UserEntity>{
        const user = userService.createNewUser(data);
        
        return user;

        // send registration confirmation email to user
    }
}

export { AuthService };
