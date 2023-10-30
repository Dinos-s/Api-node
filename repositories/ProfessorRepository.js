import Professor from '../models/Professor.js'

const saveProfessor = async (professorModel) => {
    const save = await Professor.create(professorModel)
    return save
}

const getAllProfessores = async () => {
    return await Professor.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
}

const getProfessorById = async (id) => {
    return await Professor.findByPk(id)
}

const updateProfessorById = async (id, professorModel) => {
    try {
        const result = await Professor.update(professorModel,{
            where: {
                id: id,
            }
        })
        
        if (result[0] === 1) {
            return {
                message: "Professore atualizado com sucesso!"
            }
        } else {
            return {
                message: `Professor de n°${id} não pode ser atualizado!`,
                status: 404
            }
        }
    } catch (error) {
        return error
    }
}

const deleteProfessorById = async (id) => {
    return await Professor.destroy({
        where: {
            id: id,
        }
    })
}

const factory = {
    saveProfessor,
    getProfessorById,
    getAllProfessores,
    updateProfessorById,
    deleteProfessorById,
}

export default factory