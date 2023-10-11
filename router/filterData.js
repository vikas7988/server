const express = require("express");
const {filEndYear,filCountry,filPestle,filRegion,filSector,filSource,filTopic} = require("../controller/filterData");
const router = express.Router();

router.get("/end_year", filEndYear);
router.get("/topic", filTopic);
router.get("/sector", filSector);
router.get("/region", filRegion);
router.get("/source", filSource);
router.get("/pestle", filPestle);
router.get("/country", filCountry);

module.exports = router;
