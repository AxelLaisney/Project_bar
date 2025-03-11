const router = require("express").Router()

const { index, show, update, create, destroy} = require("../controllers/bierreController")

router.get("/bars/:id_bar/biere", index)
router.get("/biere/:id", show)

router.post("/bars/:id_bar/biere", create)

router.put("/biere/:id", update)

router.delete("/biere/:id", destroy)


module.exports = router;
