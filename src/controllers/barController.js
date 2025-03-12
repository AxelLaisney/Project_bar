const {bar, biere, commande}  = require("../models/bar.js")
const {Op, where} = require("sequelize")


const index = async (req, res) => {
    let ville = req.query["ville"]
    let name = req.query["name"]
    let where = {}
    if(ville != undefined){
      ville = "%" + ville
      where = { where: {adresse: {[Op.like]: ville}}}
    }else if(name != undefined){
      name = "%" + name
      where = { where: {name: {[Op.like]: name}}}
    }
    console.log(where)
    bar.findAll(where).then((bar) => {
      res.json(bar)
    }).catch((err) => res.status(500).json(err))
  }


  const show = (req, res) => {
    const id = parseInt(req.params.id)
  
    bar.findByPk(id)
      .then((bar) => {
        res.json(bar)
      })
      .catch((err) => {
        res.status(404).json({ message: "Bar not found !" })
      }).catch((err) => res.status(500).json(err))
  }

  const store = (req, res) => {
    bar.create(req.body)
      .then((bar) => {
        res.status(201).json({ message: "Bar created !", bar })
      }).catch((err) => res.status(500).json(err))
  }
  const update = (req, res) => {
    const id = parseInt(req.params.id)
  
    bar.update(req.body, { where: { id } })
      .then((bar) => {
        res.json({ message: "Bar updated", bar })
      }).catch((err) => res.status(500).json(err))
  }
  const destroy = (req, res) => {
    const id = parseInt(req.params.id)
  
    bar.destroy({ where : {id}})
    .then(() => {
      biere.destroy({ where: {BarId: id}})
    }).then(() => {
      commande.destroy({ where: {BarId: id}})
    }).then(() => res.json({message: "bar has been destroyed along with its beer(s)"})).catch((err) => res.status(500).json(err))
  }

  module.exports = { index, show, store, update, destroy }