const Request = require("../models/Request");

// Send new request
exports.sendRequest = async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    const saved = await newRequest.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Invalid request data" });
  }
};

// Get all requests
exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find()
      .populate("fromUser", "name")
      .populate("toUser", "name");
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update request status (accept/reject)
exports.updateRequestStatus = async (req, res) => {
  try {
    const updated = await Request.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Invalid request update" });
  }
};
