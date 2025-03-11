require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.SERVER_PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: false}))

app.listen(PORT, () => {
    console.log("server listening on port ", PORT)
})

