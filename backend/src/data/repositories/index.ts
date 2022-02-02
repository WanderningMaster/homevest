import { EstateRepository } from './estate-repository';
import { UserRepository } from './user-repository';

const userRepository = new UserRepository();
const estateRepository = new EstateRepository();

export {
  userRepository,
  estateRepository
}
