// backend/controllers/userController.js

const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("❌ Error fetching users:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

exports.addUser = async (req, res) => {
  try {
    console.log("📩 Received user data:", req.body); // Log form data

    const user = new User(req.body);
    const saved = await user.save();

    console.log("✅ User saved:", saved); // Confirm save

    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Failed to save user:", err.message);
    res.status(400).json({ error: "Invalid data" });
  }
};
