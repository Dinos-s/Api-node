import express from "express";

import alunoController from './AlunoController.js'
import professorController from "./ProfessorController.js";
import SalaController from "./SalaController.js";

let router = express.Router();

router.get("/", function (req, res) {
    console.log("hi!");
    res.status(200).json({ message: "hi!" });
  });

router.use('/', alunoController)
router.use('/', professorController)
router.use('/', SalaController)

export default router