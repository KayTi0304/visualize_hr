const Company = require("../models/Company");

var CompanyDAO = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deteleById,
    updateCompany: updateCompany,
};

function findAll() {
    return Company.findAll();
}

function findById(id) {
    return Company.findByPk(id);
}

function deteleById(id) {
    return Company.destroy({
        where: { id: id },
    });
}

function create(company) {
    var newCompany = new Company(company);
    return newCompany.save();
}

function updateCompany(company, id) {
    var updateCompany = {
        name: company.name,
        address: company.address,
    };
    return Company.update(updateCompany, { where: { id: id } });
}

module.exports = CompanyDAO;