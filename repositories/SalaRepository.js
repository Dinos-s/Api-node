import Sala from '../models/Sala.js'

const saveSala = async (salaModel) => {
    const save = await Sala.create(salaModel)
    return save
}

const getAllSalas = async () => {
    return await Sala.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
}

const getSalaById = async (id) => {
    return await Sala.findByPk(id)
}

const updateSalaById = async (id, salaModel) => {
    try {
        const result = await Sala.update(salaModel,{
            where: {
                id: id,
            }
        })
        
        if (result[0] === 1) {
            return {
                message: "Sala atualizado com sucesso!"
            }
        } else {
            return {
                message: `Sala de n°${id} não pode ser atualizada!`,
                status: 404
            }
        }
    } catch (error) {
        return error
    }
}

const deleteSalaById = async (id) => {
    return await Sala.destroy({
        where: {
            id: id,
        }
    })
}

const factory = {
    saveSala,
    getSalaById,
    getAllSalas,
    updateSalaById,
    deleteSalaById,
}

export default factory