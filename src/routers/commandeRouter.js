const Router = require("express").Router()

const { index, show, update, create, destroy} = require("../../controller/commandeController")




Router.put("/commandes/:id", update);
Router.delete("/commande/:id", destroy);

module.exports = Router;