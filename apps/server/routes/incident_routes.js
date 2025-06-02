const db = require("../prisma/queries.js")
const express = require('express')
const router = express.Router();

router.post("/delete_incident", async(req, res) =>{
    const { incident_id } = req.body;
    try{
        const fetched_dashboard = await db.deleteIncident(incident_id);
        if(fetched_dashboard.ok){ return res.status(200).json({message: "Incident deleted successfully"}) }
        else{ return res.status(500).json({message: `Failed to delete incident with id: ${incident_id}, returned with database error`})}
    }catch(error){
        return res.status(500).json({message: `Failed to delete incident with id: ${incident_id}, returned with syntax error: ${error}`})
    }
})
router.post("/latest_incident", async(req, res) =>{
    const { dashboard_id } = req.body;
    try{
        const latest_incident = await db.fetchLatestIncident(dashboard_id)
        return res.status(200).json({latest_incident: latest_incident.IncidentCollection[0]})
    }catch(error){
        return res.status(500).json({message: `Syntax error in fetching latest dashboard incident for user: ${req.user.name}, returned with error: ${error}`})
    }
})

router.post("/find_incident", async(req, res) =>{
    const {incident_id} = req.body;
    try{ 
        const found_incident = await db.fetchIncident(incident_id);  
        return res.status(200).json({found_incident})
    }
    catch(error){
        return res.status(500).json({message: `Syntax error in fetching incident ${incident_id}, returned with error: ${error}`})
    }
})


module.exports = router;