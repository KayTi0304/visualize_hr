const express = require("express");
const EmployeeDAO = require("../../DAO/employeeDAO");
const CompanyDAO = require("../../DAO/companyDAO");
const EmploysDAO = require("../../DAO/employsDAO");
const TakesDAO = require("../../DAO/takesDAO");
const OffersDAO = require("../../DAO/offersDAO");
const ModuleDAO = require("../../DAO/moduleDAO");
const LessonDAO = require("../../DAO/lessonDAO");

const router = express.Router();

//get all employees
router.get("/", async(req, res) => {
    const result = await EmployeeDAO.findAll();
    res.send(result);
});

// get one employee
router.get("/:id", async(req, res) => {
    const result = await EmployeeDAO.findById(req.params.id);
    res.send(result);
});

// get employee's company
router.get("/employs/:id", async(req, res) => {
    const employs = await EmploysDAO.findAll();
    var company;
    for (var employ of employs) {
        if (employ.eid === req.params.id) {
            company = await CompanyDAO.findById(employ.cid);
            break;
        }
    }
    res.send(company);
});

// get employee's modules
router.get("/takes/:id", async(req, res) => {
    const takes = await TakesDAO.findAll();
    var modules = [];
    const mids = [];
    for (var take of takes) {
        if (take.eid === req.params.id && !mids.includes(take.mid)) {
            var module = await ModuleDAO.findById(take.mid);
            modules.push(module);
            mids.push(take.mid);
        }
    }
    res.send(modules);
});

// add employee
router.post("/", async(req, res) => {
    let data = req.body;
    let employee = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        enrollDate: data.enrollDate,
        password: data.password,
    };
    const companyList = await CompanyDAO.findAll();
    var companyId = -1;
    for (var company of companyList) {
        if (company.name === data.companyName) {
            companyId = company.id;
        }
    }
    // add to employs table
    const resultEmployee = await EmployeeDAO.create(employee);
    if (companyId != -1)
        await EmploysDAO.create({
            eid: resultEmployee.id,
            cid: companyId,
            doneEnroll: false,
        });
    // add to takes table if necessary
    const offers = await OffersDAO.findAll();
    const lessonPairs = await LessonDAO.findAll();
    var modules = [];
    var lessons = [];
    for (var offer of offers) {
        if (offer.cid === companyId) {
            var module = await ModuleDAO.findById(offer.mid);
            modules.push(module);
        }
    }
    for (var mod of modules) {
        for (var lp of lessonPairs) {
            if (lp.mid === mod.id) {
                lessons.push({ mid: mod.id, lid: lp.id });
            }
        }
    }
    for (var lesson of lessons) {
        await TakesDAO.create({
            eid: resultEmployee.id,
            lid: lesson.lid,
            mid: lesson.mid,
            doneLesson: false,
        });
    }

    res.send(resultEmployee);
});

// delete employee
router.delete("/:id", async(req, res) => {
    const result = await EmployeeDAO.deleteById(req.params.id);
    res.send("delete ok");
});

// update employee
router.put("/:id", async(req, res) => {
    const result = await EmployeeDAO.updateEmployee(req.body, req.params.id);
    res.send(result);
});

module.exports = router;