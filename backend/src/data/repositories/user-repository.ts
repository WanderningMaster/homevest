import { UserEntity } from '../models/user.entity';
import { IUser } from '~/common/interfaces';
import { DeleteResult, UpdateResult, EntityRepository, Repository} from "typeorm";
import bcrypt from "bcrypt";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  public async getAll(): Promise<UserEntity[]>{
    return await this.find();
  }
  public async getById(id:string): Promise<UserEntity | undefined>{
    return await this.findOne({
      where: {
        id
      }
    });
  }
  public async createUser(user:IUser): Promise<UserEntity>{
    user = await this.getHash(user);
    return await this.save(user);
  }
  public async updateById(id:string, data:IUser): Promise<UpdateResult>{
    data = await this.getHash(data);
    return await this.update(
      id,
      data
    );
  }
  public async deleteById(id:string): Promise<DeleteResult>{
    return await this.delete({ 
        id 
    });
  }
  public async getHash(user: IUser): Promise<IUser>{
    if(user.password){
      user.password = await bcrypt.hash(user.password, 8);
    }
    return user;
  }
}
