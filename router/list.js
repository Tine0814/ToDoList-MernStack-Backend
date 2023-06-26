const express = require("express");
const List = require("../models/listModel");

const router = express.Router();

// get all list
router.get("/", (req, res) => {
  res.json({ msg: "GET All List" });
});

// get list by ID
router.get("/:id", (req, res) => {
  res.json({ msg: "GET By ID" });
});

// POST new List
router.post("/", async (req, res) => {
  const { title, task } = req.body;

  try {
    const list = await List.create({ title, task });
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE List
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE data" });
});

// UPDATE  List
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE data" });
});

module.exports = router;
