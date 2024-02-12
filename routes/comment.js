const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth } = require("../middleware/auth");

//Comment Routes - simplified for now
router.post("/createComment/:id", commentsController.createComment);
router.delete("/deleteComment/:id", commentsController.deleteComment);

module.exports = router;