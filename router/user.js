const express = require("express");

const router = express.Router();

// Control Function
const { loginUser, signupUser } = require("../controllers/userControler");

// login route

router.post("/login", loginUser);

// sign up route
router.post("/signup", signupUser);

module.exports = router;
