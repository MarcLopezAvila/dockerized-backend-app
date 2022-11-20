import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import Server from './application/server';
import { Connect } from './application/database';
import Core from './core';

const app: Express = express();

Connect().then(() => {
    Core(app);
    Server(app);
})


