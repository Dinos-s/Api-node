import express from 'express'
import alunoService from '../service/AlunoService.js'

const router = express.Router()

router.post('/addAluno', async function (req, res)  {
    const { name, idade, nota_primeiro_semestre, nota_segundo_semestre } = req.body

    const alunoModel = {
        name: name,
        idade: idade,
        nota_primeiro_semestre: nota_primeiro_semestre,
        nota_segundo_semestre: nota_segundo_semestre,
    }

    const aluno = await alunoService.saveAluno(alunoModel)
    return res.status(201).json(aluno)
})

router.get('/alunos', async function (req, res)  {
    const allAlunos = await alunoService.getAllAlunos()
    return res.status(200).json(allAlunos)
})

router.get('/aluno/:id', async function (req, res)  {
    const alunoId = await alunoService.getAlunoById(req.params.id)
    return res.status(200).json(alunoId)
})

router.put('/updateAluno/:id', async function (req, res) {
    const { name, idade, nota_primeiro_semestre, nota_segundo_semestre } = req.body

    const alunoModel = {
        name: name,
        idade: idade,
        nota_primeiro_semestre: nota_primeiro_semestre,
        nota_segundo_semestre: nota_segundo_semestre,
    }

    const aluno = await alunoService.updateAlunoById(alunoModel)
    return res.status(201).json(aluno)
})

router.delete('/deleteAluno/', async function (req, res)  {
    const aluno = await alunoService.deleteAlunoById(req.params.id)
    return res.status(200).json(aluno)
})

export default router