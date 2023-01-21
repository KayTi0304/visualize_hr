const express = require("express");
const LessonDAO = require("../../DAO/lessonDAO");

const router = express.Router();

//get all lessons
router.get("/module/:id", async(req, res) => {
    const result = await LessonDAO.findAll();
    const lessons = result.filter((element) => element.mid === req.params.id);
    res.send(lessons);
});

router.get("/", async(req, res) => {
    const result = await LessonDAO.findAll();
    res.send(result);
});

// get one lesson
router.get("/:id", async(req, res) => {
    const result = await LessonDAO.findById(req.params.id);
    res.send(result);
});

// add lesson
router.post("/", async(req, res) => {
    let lesson = req.body;
    const result = await LessonDAO.create(lesson);
    res.send(result);
});

// delete lesson
router.delete("/:id", async(req, res) => {
    const result = await LessonDAO.deleteById(req.params.id);
    res.send("delete ok");
});

// update lesson
router.put("/:id", async(req, res) => {
    const result = await LessonDAO.updateLesson(req.body, req.params.id);
    res.send(result);
});

module.exports = router;