const { Sequelize, DataTypes } = require('sequelize');

const { DB_HOST } = process.env;
const { DB_NAME } = process.env;
const { DB_PORT } = process.env;
const { DB_USER } = process.env;
const { DB_PASSWORD } = process.env;

const uri = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const db = new Sequelize(uri, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        native: true,
    },
    logging: false,
});

const Connect = () => db.authenticate().then(async () => {
    await db.sync();
    return db;
});

export {
    DataTypes,
    Connect,
};

export default db;
