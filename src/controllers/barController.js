const bar  = require("../models/bar.js")


const index = async (req, res) => {
    bar.findAll().then((bar) => {
      res.json(bar)
    })
  }


  const show = (req, res) => {
    const id = parseInt(req.params.id)
  
    bar.findByPk(id)
      .then((bar) => {
        res.json(bar)
      })
      .catch((err) => {
        res.status(404).json({ message: "Bar not found !" })
      })
  }

  const store = (req, res) => {
    bar.create(req.body)
      .then((bar) => {
        res.status(201).json({ message: "Bar created !", bar })
      })
  }
  const update = (req, res) => {
    const id = parseInt(req.params.id)
  
    bar.update(req.body, { where: { id } })
      .then((bar) => {
        res.json({ message: "Bar updated", bar })
      })
  }
  const destroy = (req, res) => {
    const id = parseInt(req.params.id)
  
    bar.destroy({ where : {id}})
    .then( (bar) => {
      res.json({message: "Bar Deleted", bar})
    })
  }

  module.exports = { index, show, store, update, destroy }