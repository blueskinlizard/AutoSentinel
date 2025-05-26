const db = require("../prisma/queries.js")
const express = require('express')
const router = express.Router();

router.post("/delete_incident", async(req, res) =>{
    const {incident_id} = req.body;
    try{

    }catch(error){
        
    }
})
router.post("/latest_incident", async(req, res) =>{
    const {user_id} = req.body;
    try{
        const fetched_dashboard = await db.fetchDashboard(user_id);
        const incidents = fetched_dashboard?.IncidentCollection || [];
        const latest_incident = incidents[incidents.length - 1] || null;
        return res.status(200).json({latest_incident})
    }catch(error){
        return res.status(500).json({message: `Error in fetching latest dashboard incident for user: ${user_id}, returned with error: ${error}`})
    }
})


module.exports = router;