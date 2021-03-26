const express = require("express");
const { registerUser, loginUser } = require("../controllers/UserController");
const router = express.Router();
router.post("/login", loginUser);
router.post("/signup", registerUser);
router.get("/home", (req, res) => {
  res.send("Hey Home");
});

module.exports = router;
