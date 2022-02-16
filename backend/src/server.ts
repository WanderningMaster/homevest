import { join } from 'path';
import express, { json, urlencoded } from 'express';
import cookieParser from "cookie-parser";
import  cors  from "cors";
import { ENV } from '~/common/enums';
import { initApi } from '~/api/api';
import { logger } from '~/services/services';
import { setTraceId, logRequest, handleError } from '~/middlewares';

import { DbConnectionError } from '~/exceptions';
import { connection } from './data/db/connection';

import { connectRedis } from './data/db/redis';

import "reflect-metadata";

const app = express();

connection
  .then(async (connection) => {
    connection.synchronize();
    return logger.log('Database connection was successful');
  })
  .catch(({ message, stack }: DbConnectionError) => {
    return logger.error(message, stack);
  });

connectRedis();

app.use(setTraceId);
app.use(logRequest);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

initApi(app);

app.use(express.static(join(__dirname, '../public')));

app.use(handleError);

const server = app.listen(ENV.APP.SERVER_PORT, () => {
  logger.log(`Listening to connections on port — ${ENV.APP.SERVER_PORT}`);
});

export { server };
