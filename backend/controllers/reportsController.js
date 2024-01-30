const mongoose = require("mongoose")
const Reports = require("../models/reportsModel")


const getReports = async (req, res) => {
    try {
        const reports = await Reports.find()

        if(reports){
            res.status(200).json(reports)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getReportByQuery = async (req, res) => {

    try {
        const reports = await Reports.find(req.body)

        if(reports){
            res.status(200).json(reports)
        }
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getTabsData = async (req, res) => {

    try {
        const reports = await Reports.find()
        let totalEnergySector = 0
        reports.map(report => {
            if(report.sector == "Energy"){
                totalEnergySector++
            }
        })

        if(reports){
            res.status(200).json({total: reports.length, energy: totalEnergySector})
        }
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getData = (reports) => {
    let likelihoods = {}
    let relevances = {}
    let years = {}
    let intensities = {}
    let published = { jan:0, feb:0, mar:0, apr:0, may:0, jun:0, jul:0, aug:0, sep:0, oct:0, nov:0, dec:0}
    reports.map(report => {
        if(report.likelihood != null){
            if(report.likelihood && likelihoods.hasOwnProperty(report.likelihood)){
                let val = likelihoods[`${report.likelihood}`] + 1
                likelihoods[`${report.likelihood}`] = val
            }
            else{
                likelihoods[`${report.likelihood}`] = 1
            }
        }

        if(report.relevance != null){
            if(report.relevance && relevances.hasOwnProperty(report.relevance)){
                let val = relevances[`${report.relevance}`] + 1
                relevances[`${report.relevance}`] = val
            }   
            else{
                relevances[`${report.relevance}`] = 1
            }
        }   

        if(report.published != ""){
            const month = report.published && report.published.toLowerCase().split(" ")[0].slice(0,3)
            
            if(published.hasOwnProperty(month)){
                let val = published[`${month}`] + 1
                published[`${month}`] = val
            }
            else{       
                published[`${month}`] = 1
            }
        }

        if(report.published != ""){
            let year = report.published.split(" ")[2]
            if(year && years.hasOwnProperty(year)){
                let val = years[`${year}`] + 1
                years[`${year}`] = val
            }
            else{
                years[`${year}`] = 1
            }
        }
        
        if(report.intensity != null){
            let intensity = report.intensity
            if(intensity && intensities.hasOwnProperty(intensity)){
                let val = intensities[`${intensity}`] + 1
                intensities[`${intensity}`] = val
            }
            else{
                intensities[`${intensity}`] = 1
            }
        }
    })

    return { likelihoods: likelihoods, relevances: relevances, published: published, years: years, intensities: intensities }
}


const getChartData = async (req, res) => {

    try {
        const reports = await Reports.find()
        
        if(reports){
            res.status(200).json(getData(reports))
        }
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}



module.exports = { getReports, getReportByQuery, getTabsData, getChartData }