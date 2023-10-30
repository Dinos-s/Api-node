import DataTypes from 'sequelize';
import db from '../db/db.js'

const Professor = db.define('professores', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { underscored: true })

export default Professor