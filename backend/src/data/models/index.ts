import { sequelize } from '../db/connection';
import createEstateModel from './estate';
import createUserModel from './user';

const UserModel = createUserModel(sequelize);
const EstateModel = createEstateModel(sequelize);

export {
  UserModel,
  EstateModel
};
