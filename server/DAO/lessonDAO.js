const Lesson = require("../models/Lesson");

var LessonDAO = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateLesson: updateLesson,
};

function findAll() {
    return Lesson.findAll();
}

function findById(id) {
    return Lesson.findByPk(id);
}

function deleteById(id) {
    return Lesson.destroy({
        where: { id: id },
    });
}

function create(lesson) {
    var newLesson = new Lesson(lesson);
    return newLesson.save();
}

function updateLesson(lesson, id) {
    var updateLesson = {
        mid: lesson.mid,
        description: lesson.description,
        question: lesson.question,
        answer: lesson.answer,
    };
    return Lesson.update(updateLesson, { where: { id: id } });
}

module.exports = LessonDAO;