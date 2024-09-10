const express = require('express')
const router = express.Router();

const SB = 'ITE314';
const EX = 'P2';
const ND = 'NODEJS';



router.get('/subject', (req, res) => {
    res.status(200).send(SB)
})


router.get('/exam', (req, res) => {
    res.status(200).send(EX)
})

router.get('/node', (req, res) => {
    res.status(200).send(ND)
})


router.get('/mydata', (req, res) => {
    res.status(200).send({"subject": SB,  "exam": EX, "node": ND})
})

module.exports = router