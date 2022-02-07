import { IToken } from '~/common/interfaces';
import { tokenRepository } from '~/data/repositories/token-repository';

class TokenService {
    public createToken(data: IToken): Promise<string>{
        const id = tokenRepository.createToken(data);
        return id;
    }
}

export { TokenService };