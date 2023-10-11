const express = require("express");
const getQueryData = require("../controller/getData");
const router = express.Router();

router.get("/", getQueryData);

module.exports = router;