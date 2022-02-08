import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { EstateService } from './estate-service/estate-service.service';
import { Logger } from './logger/logger.service';
import { UserService } from './user-service/user-service.service';
import { InvestorService } from './user-service/investor-service.service';
import { AppartmentService } from './appartment-service/appartment-service.service';
import { CompanyService } from './user-service/company-service.service';

const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const logger = new Logger({
  logLevel: LogLevel.DEBUG,
  asyncStorage: appAsyncStorage,
});

const userService = new UserService();
const investorService = new InvestorService();
const companyService = new CompanyService();
const estateService = new EstateService();
const appartmentService = new AppartmentService();

export { appAsyncStorage, logger, userService, investorService, estateService, appartmentService, companyService };
