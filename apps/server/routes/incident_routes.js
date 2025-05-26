const db = require("../prisma/queries.js")
const express = require('express')
const router = express.Router();

router.post("/delete_incident", async(req, res) =>{
    const fetched_user = await db.findUserByName(req.user.name)
    try{
        const fetched_dashboard = await db.fetchDashboard(fetched_user.id);
    }catch(error){
        
    }
})
router.get("/latest_incident", async(req, res) =>{
    const fetched_user = await db.findUserByName(req.user.name)
    try{
        const fetched_dashboard = await db.fetchDashboard(fetched_user.id);
        const incidents = fetched_dashboard?.IncidentCollection || [];
        const latest_incident = incidents[incidents.length - 1] || null;
        return res.status(200).json({latest_incident})
    }catch(error){
        return res.status(500).json({message: `Error in fetching latest dashboard incident for user: ${user_id}, returned with error: ${error}`})
    }
})


module.exports = router;