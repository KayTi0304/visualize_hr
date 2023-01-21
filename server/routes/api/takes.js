const express = require("express");
const takesDAO = require("../../DAO/takesDAO");

const router = express.Router();

//get all pairs
router.get("/", async(req, res) => {
    const result = await takesDAO.findAll();
    res.send(result);
});

// add one offers pair
router.post("/", async(req, res) => {
    let takes = req.body;
    const result = await takesDAO.create(takes);
    res.send(result);
});

// delete one employ pair
router.delete("/:id", async(req, res) => {
    const result = await takesDAO.deleteById(req.params.id);
    res.send("delete ok");
});

module.exports = router;