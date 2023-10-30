import alunoRepo from "../repositories/AlunoRepository.js";

const saveAluno = (alunoModel) => {
    return alunoRepo.saveAluno(alunoModel)
}

const getAllAlunos = () => {
    return alunoRepo.getAllAlunos()
}

const getAlunoById = (id) => {
    return alunoRepo.getAlunoById(id)
}

const updateAlunoById = (id, alunoModel) => {
    return alunoRepo.updateAlunoById(id, alunoModel)
}

const deleteAlunoById = (id) => {
    return alunoRepo.deleteAlunoById(id)
}

const service = {
    saveAluno,
    getAllAlunos,
    getAlunoById,
    updateAlunoById,
    deleteAlunoById
}

export default service