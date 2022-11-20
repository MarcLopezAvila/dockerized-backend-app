import db, { DataTypes } from '../../../application/database';

const UserModel = db.define('user', {
    name: DataTypes.TEXT,
});

export default UserModel;