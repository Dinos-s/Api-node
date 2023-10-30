import DataTypes from 'sequelize';
import db from '../db/db.js'

const Aluno = db.define('alunos', {
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
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nota_primeiro_semestre: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    nota_segundo_semestre: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
}, { underscored: true })

export default Aluno