const express = require("express")
const { getReports, getReportByQuery, getChartData, getTabsData } = require("../controllers/reportsController")

const router = express.Router()

router.get("/get", getReports)
router.get("/chartData", getChartData)
router.get("/tabData", getTabsData)
router.post("/get/query", getReportByQuery)

module.exports = router
