const Router = require("express").Router()

const { index, show, update, destroy, store} = require("../controller/barController")


Router.get("/bars", index)

Router.get("/bars/:id", show)

Router.post("/bars", store)

Router.put("/bars/:id", update)

Router.delete("/bars/:id", destroy);

module.exports = Router;