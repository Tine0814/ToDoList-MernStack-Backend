const express = require("express");
const {
  getLists,
  getList,
  createList,
  deleteList,
  updateList,
} = require("../controllers/listControler");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth); // this is middleware function to protect the data to not auth user

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
