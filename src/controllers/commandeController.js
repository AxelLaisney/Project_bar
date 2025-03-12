const Commande = require("../models/commande")

const index = (req, res) => {
    let bar_id= parseInt(req.params.id_bar)
    Commande.findAll({ where: {BarId: bar_id} })
    .then((commande) => res.json(commande))
    .catch((err) => res.status(500).json(err))
}

const show = (req, res) => {
    let id = parseInt(req.params.id)
    Commande.findByPk(id)
    .then((commande) => res.json(commande))
    .catch((err) => res.status(500).json(err))
}

const create = (req, res) => {
    let bar_id = parseInt(req.params.id_bar)
    let { name, prix, date, status } = req.body
    Commande.create({
        name: name,
        prix: parseFloat(prix),
        date: date,
        status: status,
        BarId: bar_id
    })
    .then((commande) => res.status(201).json({ message: "commande added", commande}))
}

const update = (req, res) => {
    let id = parseInt(req.params.id)
    Commande.update(req.body, { where: {id} }).then((commande) => res.json({ message: "commande updated", commande}))
}

const destroy = (req, res) => {
    let id = parseInt(req.params.id)
    Commande.destroy({ where: {id}}).then(() => res.json({ message: "commande destroyed"}))
}

module.exports = { index, show, create, update, destroy }