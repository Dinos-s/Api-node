import Aluno from '../models/Aluno.js'

const saveAluno = async (alunoModel) => {
    const save = await Aluno.create(alunoModel)
    return save
}

const getAllAlunos = async () => {
    return await Aluno.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
}

const getAlunoById = async (id) => {
    return await Aluno.findByPk(id)
}

const updateAlunoById = async (id, alunoModel) => {
    try {
        const result = await Aluno.update(alunoModel,{
            where: {
                id: id,
            }
        })
        
        if (result[0] === 1) {
            return {
                message: "Aluno atualizado com sucesso!"
            }
        } else {
            return {
                message: `Aluno de n°${id} não pode ser atualizado!`,
                status: 404
            }
        }
    } catch (error) {
        return error
    }
}

const deleteAlunoById = async (id) => {
    return await Aluno.destroy({
        where: {
            id: id,
        }
    })
}

const factory = {
    saveAluno,
    getAlunoById,
    getAllAlunos,
    updateAlunoById,
    deleteAlunoById,
}

export default factory