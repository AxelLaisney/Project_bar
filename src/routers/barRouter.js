const Router = require("express").Router()

const { index, show, update, create, destroy} = require("../../controller/barController")

Router.delete("/bars/:id", destroy);


module.exports = Router;