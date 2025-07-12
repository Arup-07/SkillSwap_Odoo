const express = require("express");
const router = express.Router();
const {
  sendRequest,
  getRequests,
  updateRequestStatus
} = require("../controllers/requestController");

router.post("/", sendRequest);              // POST /api/requests
router.get("/", getRequests);              // GET /api/requests
router.put("/:id", updateRequestStatus);   // PUT /api/requests/:id

module.exports = router;
