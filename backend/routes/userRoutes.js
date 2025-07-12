const express = require("express");
const router = express.Router();
const { getUsers, addUser } = require("../controllers/userController");

router.get("/", getUsers);     // GET /api/users
router.post("/", addUser);     // POST /api/users

module.exports = router;
