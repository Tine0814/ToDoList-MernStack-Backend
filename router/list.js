const express = require("express");
const {
  getLists,
  getList,
  createList,
  deleteList,
  updateList,
} = require("../controllers/listControler");

const router = express.Router();

// get all list
router.get("/", getLists);

// get list by ID
router.get("/:id", getList);

// POST new List
router.post("/", createList);

// DELETE List
router.delete("/:id", deleteList);

// UPDATE  List
router.patch("/:id", updateList);

module.exports = router;
