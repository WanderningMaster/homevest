import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { Logger } from './logger/logger.service';
import { UserService } from './user-service/user-service.service';
import { InvestorService } from './user-service/investor-service.service';
import { TokenService } from './token-service/token-service.service';

const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const logger = new Logger({
  logLevel: LogLevel.DEBUG,
  asyncStorage: appAsyncStorage,
});

const userService = new UserService();
const investorService = new InvestorService();
const tokenService = new TokenService();

export { appAsyncStorage, logger, userService, investorService, tokenService};
