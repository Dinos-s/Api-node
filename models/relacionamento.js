import Aluno from "./Aluno.js";
import Professor from "./Professor.js";
import Sala from "./Sala.js";

const relacionamentos = () => {
    Sala.hasMany(Aluno)
    Sala.hasMany(Professor)
}

const factory = {
    relacionamentos
}

export default factory