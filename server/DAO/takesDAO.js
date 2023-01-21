const Takes = require("../models/Takes");

var TakesDAO = {
    findAll: findAll,
    create: create,
    deleteById: deleteById,
    updateTakes: updateTakes,
};

function findAll() {
    return Takes.findAll();
}

function deleteById(id) {
    return Takes.destroy({
        where: { id: id },
    });
}

function create(takes) {
    var newTakes = new Takes(takes);
    return newTakes.save();
}

function updateTakes(takes, id) {
    var updateTakes = {
        eid: takes.eid,
        lid: takes.lid,
        mid: takes.mid,
        doneLesson: takes.doneLesson,
    };
    return Takes.update(updateTakes, { where: { id: id } });
}

module.exports = TakesDAO;