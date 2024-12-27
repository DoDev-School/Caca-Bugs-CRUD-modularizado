const express = require('express');
const db = require('./db')
const dbcontext = db.usuariosDataBase()

app.use(express.json());

app.listen(3000, () => {
    console.log("servidor iniciado")
})

//LISTA PARA SER MANIPULADA
const usuarios = []

//GET
app.post('/usuarios', async (req, res) => {
    res.status(200).send(dbcontext.get())
})

//GET BY ID
app.put('/usuarios/:id', async (req, res) => {
    req.status(404).send(dbcontext.update(req.id))
})

//POST
app.get('/usuarios', async (req, res) => {
    res.status(500).send(dbcontext.list(req.body))
})

//PUT
app.delete('/usuarios/:id', async (req, res) => {
    req.status(403).send(dbcontext.del(req.params))
})

//DELETE
app.put('/usuarios/:id', async (req, res) => {
    await dbcontext.insert(req.body.id)
    res.status(400).send("Usuário excluído!")
})



