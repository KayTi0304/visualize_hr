const express = require("express");
const CompanyDAO = require("../../DAO/companyDAO");
const EmployeeDAO = require("../../DAO/employeeDAO");
const EmploysDAO = require("../../DAO/employsDAO");
const OffersDAO = require("../../DAO/offersDAO");
const ModuleDAO = require("../../DAO/moduleDAO");

const router = express.Router();

//get all companies
router.get("/", async(req, res) => {
    const result = await CompanyDAO.findAll();
    res.send(result);
});

// get one company
router.get("/:id", async(req, res) => {
    const result = await CompanyDAO.findById(req.params.id);
    res.send(result);
});

// get company employees
router.get("/employs/:id", async(req, res) => {
    const employs = await EmploysDAO.findAll();
    var employees = [];
    for (var employ of employs) {
        if (employ.cid === req.params.id) {
            var employee = await EmployeeDAO.findById(employ.eid);
            employees.push(employee);
        }
    }
    res.send(employees);
});

// get company modules
router.get("/offers/:id", async(req, res) => {
    const offers = await OffersDAO.findAll();
    var modules = [];
    for (var offer of offers) {
        if (offer.cid === req.params.id) {
            var module = await ModuleDAO.findById(offer.mid);
            modules.push(module);
        }
    }
    res.send(modules);
});

// add company
router.post("/", async(req, res) => {
    let company = req.body;
    const result = await CompanyDAO.create(company);
    res.send(result);
});

// delete company
router.delete("/:id", async(req, res) => {
    const result = await CompanyDAO.deleteById(req.params.id);
    res.send("delete ok");
});

// update company
router.put("/:id", async(req, res) => {
    const result = await CompanyDAO.updateCompany(req.body, req.params.id);
    res.send(result);
});

module.exports = router;