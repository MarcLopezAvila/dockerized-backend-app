import { Express } from 'express';
import UserModel from './model';

const Controller = (app: Express) => {
    app.get('/', async (req, res) => {
        const users = await UserModel.findAll();
        res.send(users);
    });

    app.get('/:user', async (req, res) => {
        await UserModel.create({ name: req.params.user });
        res.sendStatus(200);
    });
};

export default Controller;
