import DataTypes from 'sequelize';
import db from '../db/db.js'

const Sala = db.define('salas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    num_Sala: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { underscored: true })

export default Sala