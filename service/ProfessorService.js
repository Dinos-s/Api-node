import professorRepo from "../repositories/ProfessorRepository.js";

const saveProfessor = (professorModel) => {
    return professorRepo.saveProfessor(professorModel)
}

const getAllProfessores = () => {
    return professorRepo.getAllProfessores()
}

const getProfessorById = (id) => {
    return professorRepo.getProfessorById(id)
}

const updateProfessorById = (id, professorModel) => {
    return professorRepo.updateProfessorById(id, professorModel)
}

const deleteProfessorById = (id) => {
    return professorRepo.deleteProfessorById(id)
}

const service = {
    saveProfessor,
    getAllProfessores,
    getProfessorById,
    updateProfessorById,
    deleteProfessorById
}

export default service