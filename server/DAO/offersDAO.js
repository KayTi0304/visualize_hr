const Offers = require("../models/Offers");

var OffersDAO = {
    findAll: findAll,
    create: create,
    deleteById: deleteById,
};

function findAll() {
    return Offers.findAll();
}

function deleteById(id) {
    return Offers.destroy({
        where: { id: id },
    });
}

function create(offers) {
    var newOffers = new Offers(offers);
    return newOffers.save();
}

module.exports = OffersDAO;