const express = require("express");
const employsDAO = require("../../DAO/employsDAO");

const router = express.Router();

//get all pairs
router.get("/", async(req, res) => {
    const result = await employsDAO.findAll();
    res.send(result);
});

// add one employ pair
router.post("/", async(req, res) => {
    let employs = req.body;
    const result = await employsDAO.create(employs);
    res.send(result);
});

// delete one employ pair
router.delete("/:id", async(req, res) => {
    const result = await employsDAO.deleteById(req.params.id);
    res.send("delete ok");
});

module.exports = router;