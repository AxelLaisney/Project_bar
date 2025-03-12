const Router = require("express").Router()

const { index, show, update, create, destroy} = require("../controllers/commandeController")

Router.get("/bars/:id_bar/commandes", index)
Router.get("/commandes/:id", show)

Router.post("/bars/:id_bar/commandes", create)

Router.put("/commandes/:id", update)

Router.delete("/commandes/:id", destroy)

module.exports = Router;