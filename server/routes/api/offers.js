const express = require("express");
const OffersDAO = require("../../DAO/offersDAO");

const router = express.Router();

//get all pairs
router.get("/", async(req, res) => {
    const result = await OffersDAO.findAll();
    res.send(result);
});

// add one offers pair
router.post("/", async(req, res) => {
    let offers = req.body;
    const result = await OffersDAO.create(offers);
    res.send(result);
});

// delete one offer pair
router.delete("/:id", async(req, res) => {
    const result = await OffersDAO.deleteById(req.params.id);
    res.send("delete ok");
});

module.exports = router;