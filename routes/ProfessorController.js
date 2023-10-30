import express from 'express'
import profService from '../service/ProfessorService.js'

const router = express.Router()

router.post('/addProfessor', async function (req, res)  {
    const { name, sala_id } = req.body

    const professorModel = {
        name: name,
        sala_id: sala_id
    }

    const prof = await profService.saveProfessor(professorModel)
    return res.status(201).json(prof)
})

router.get('/Professores', async function (req, res)  {
    const allProfs = await profService.getAllProfessores()
    return res.status(200).json(allProfs)
})

router.get('/Professor/:id', async function (req, res)  {
    const profId = await profService.getProfessorById(req.params.id)
    return res.status(200).json(profId)
})

router.put('/updateProf/:id', async function (req, res) {
    const { name, sala_id } = req.body
    
    const professorModel = {
        name: name,
        sala_id: sala_id,
    }

    const prof = await profService.updateProfessorById(req.params.id, professorModel)
    return res.status(200).json(prof)
})

router.delete('/deleteProf/', async function (req, res)  {
    const prof = await profService.deleteProfessorById(req.params.id)
    return res.status(200).json(prof)
})

export default router