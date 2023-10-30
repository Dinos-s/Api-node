import salaRepo from "../repositories/SalaRepository.js";

const saveSala = (salaModel) => {
    return salaRepo.saveSala(salaModel)
}

const getAllSalas = () => {
    return salaRepo.getAllSalas()
}

const getSalaById = (id) => {
    return salaRepo.getSalaById(id)
}

const updateSalaById = (id, salaModel) => {
    return salaRepo.updateSalaById(id, salaModel)
}

const deleteSalaById = (id) => {
    return salaRepo.deleteSalaById(id)
}

const service = {
    saveSala,
    getAllSalas,
    getSalaById,
    updateSalaById,
    deleteSalaById
}

export default service