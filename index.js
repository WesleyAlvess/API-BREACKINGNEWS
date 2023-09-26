const express = require('express')
const userRoute = require('./src/routes/user.route')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use("/user", userRoute)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))