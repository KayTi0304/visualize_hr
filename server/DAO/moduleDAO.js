const Module = require("../models/Module");

var ModuleDAO = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateModule: updateModule,
};

function findAll() {
    return Module.findAll();
}

function findById(id) {
    return Module.findByPk(id);
}

function deleteById(id) {
    return Module.destroy({
        where: { id: id },
    });
}

function create(modules) {
    var newModule = new Module(modules);
    return newModule.save();
}

function updateModule(modules, id) {
    var updateModule = {
        name: modules.name,
        description: modules.description,
    };
    return Module.update(updateModule, { where: { id: id } });
}

module.exports = ModuleDAO;