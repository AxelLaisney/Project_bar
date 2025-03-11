const Router = require("express").Router()

const { index, show, update, create, destroy} = require("../../controller/biereController")




Router.delete("/biere/:id", destroy);


module.exports = Router;
