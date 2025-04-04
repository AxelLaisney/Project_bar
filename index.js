require("dotenv").config()
require("./src/models/models")
const cors = require("cors")

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(cors())


const PORT = process.env.SERVER_PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: false}))

app.use( require("./src/routers/commandeRouter"))
app.use( require("./src/routers/barRouter"))
app.use( require("./src/routers/biereRouter"))

app.listen(PORT, () => {
    console.log("server listening on port ", PORT)
})

