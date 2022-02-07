import { IToken } from '~/common/interfaces/token';
import { Repository, Entity, EntityCreationData } from "redis-om";
import { TokenScheme } from "../models/token-model";
import { redisCl, connectRedis } from "../db/redis";

class TokenRepository{
    repo: Repository<Entity>;
    constructor(){
        this.repo = new Repository(TokenScheme, redisCl);
    }

    public async createToken(tokenDto: IToken): Promise<string>{
        connectRedis();

        const token = this.repo.createEntity(<EntityCreationData>tokenDto);
        
        const id = await this.repo.save(token);
        return id;
    }
}

const tokenRepository = new TokenRepository();
export { tokenRepository };
