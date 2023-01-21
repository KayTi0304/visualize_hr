const Employ = require("../models/Employs");

var EmployDAO = {
    findAll: findAll,
    create: create,
    deleteById: deleteById,
};

function findAll() {
    return Employ.findAll();
}

function deleteById(id) {
    return Employ.destroy({
        where: { id: id },
    });
}

function create(employ) {
    var newEmploy = new Employ(employ);
    return newEmploy.save();
}

module.exports = EmployDAO;