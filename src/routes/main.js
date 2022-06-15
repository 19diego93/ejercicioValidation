const express = require("express");
const router = express.Router();
const path = require("path");
const mainController = require(path.join(__dirname,"../controllers/mainController"));
const adminController = require(path.join(__dirname,"../controllers/adminController"));
const adminMiddleware = require(path.join(__dirname,"../middlewares/admin"))

router.get("/", mainController.index);

router.get("/admin",adminMiddleware, adminController.admin);
// router.get("/search", mainController.search);

module.exports = router;