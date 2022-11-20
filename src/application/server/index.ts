import { Express } from 'express';

const port = process.env.PORT;

export default (server: Express) => {
    server.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
    });
};