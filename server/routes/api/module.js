const express = require("express");
const ModuleDAO = require("../../DAO/moduleDAO");
const OffersDAO = require("../../DAO/offersDAO");
const EmploysDAO = require("../../DAO/employsDAO");
const LessonDAO = require("../../DAO/lessonDAO");
const TakesDAO = require("../../DAO/takesDAO");
const router = express.Router();

//get all modules not offered by company
router.get("/company/:id", async(req, res) => {
    const modules = await ModuleDAO.findAll();
    const offers = await OffersDAO.findAll();
    var offeredMods = [];
    let cid = req.params.id;
    for (var offer of offers) {
        if (offer.cid === cid) {
            offeredMods.push(offer.mid);
        }
    }
    var result = modules.filter((m) => {
        return !offeredMods.includes(m.id);
    });
    res.send(result);
});

// get one module
router.get("/:id", async(req, res) => {
    const result = await ModuleDAO.findById(req.params.id);
    res.send(result);
});

// add company's module
router.post("/:id", async(req, res) => {
    // add offers
    const cid = req.body.cid;
    const mid = req.params.id;
    const result = await OffersDAO.create({
        cid,
        mid,
    });
    // add lessons for employees
    const employs = await EmploysDAO.findAll();
    const lessonPairs = await LessonDAO.findAll();
    var employees = [];
    var lessons = [];
    for (var employ of employs) {
        if (employ.cid === cid) {
            employees.push(employ.eid);
        }
    }
    for (var lp of lessonPairs) {
        if (lp.mid === mid) {
            lessons.push(lp.id);
        }
    }
    for (var employee of employees) {
        for (var lesson of lessons) {
            await TakesDAO.create({
                eid: employee,
                lid: lesson,
                mid,
                doneLesson: false,
            });
        }
    }
    res.send(result);
});

// add module
router.post("/", async(req, res) => {
    let module = req.body;
    const result = await ModuleDAO.create(module);
    res.send(result);
});

// delete module
router.delete("/:id", async(req, res) => {
    const result = await ModuleDAO.deleteById(req.params.id);
    res.send("delete ok");
});

// update module
router.put("/:id", async(req, res) => {
    const result = await ModuleDAO.updateModule(req.body, req.params.id);
    res.send(result);
});

module.exports = router;