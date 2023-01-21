const Employee = require("../models/Employee");

var EmployeeDAO = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateEmployee: updateEmployee,
};

function findAll() {
    return Employee.findAll();
}

function findById(id) {
    return Employee.findByPk(id);
}

function deleteById(id) {
    return Employee.destroy({
        where: { id: id },
    });
}

function create(employee) {
    var newEmployee = new Employee(employee);
    return newEmployee.save();
}

function updateEmployee(employee, id) {
    var updateEmployee = {
        firstName: employee.firstName,
        email: employee.email,
    };
    return Employee.update(updateEmployee, { where: { id: id } });
}

module.exports = EmployeeDAO;