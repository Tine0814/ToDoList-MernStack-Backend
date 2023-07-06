const List = require("../models/listModel");
const mongoose = require("mongoose");

// GET ALL LISTS

const getLists = async (req, res) => {
  const user_id = req.user._id;
  const list = await List.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(list);
};

// GET A SINGLE LIST

const getList = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no Such list" });
  }

  const list = await List.findById(id);

  if (!list) {
    return res.status(404).json({ error: "no Such list" });
  }

  res.status(200).json(list);
};

// CREATE A NEW LIST

const createList = async (req, res) => {
  const { title, task, description, date } = req.body;

  try {
    const user_id = req.user._id;
    const list = await List.create({ title, task, description, date, user_id });
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A LIST

const deleteList = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no Such list" });
  }

  const list = await List.findOneAndDelete({ _id: id });

  if (!list) {
    return res.status(400).json({ error: "no Such list" });
  }

  res.status(200).json(list);
};

// UPDATE A LIST
const updateList = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no Such list" });
  }

  const list = await List.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!list) {
    return res.status(400).json({ error: "no Such list" });
  }

  res.status(200).json(list);
};

module.exports = {
  getLists,
  getList,
  createList,
  deleteList,
  updateList,
};
