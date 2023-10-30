import express from 'express'
import salaService from '../service/SalaService.js'

const router = express.Router()

router.post('/addSala', async (req, res) => {
    const salaModel = {
        num_sala: req.params.num_sala
    }

    const sala = await salaService.saveSala(salaModel)
    return res.status(201).json(sala)
})

router.get('/Salas', async function (req, res)  {
    const allSalas = await salaService.getAllSalas()
    return res.status(200).json(allSalas)
})

router.get('/Sala/:id', async function (req, res)  {
    const salaId = await salaService.getProfessorById(req.params.id)
    return res.status(200).json(salaId)
})

router.put('/updateSala/:id', async function (req, res) {   
    const salaModel = {
        num_sala: req.params.num_sala
    }

    const sala = await salaService.updateSalaById(req.params.id, salaModel)
    return res.status(200).json(sala)
})

router.delete('/deleteSala/', async function (req, res)  {
    const sala = await salaService.deleteSalaById(req.params.id)
    return res.status(200).json(sala)
})

export default router