import { Express } from 'express';
import Users from './users';

export default (app: Express) => {
    Users(app);
}