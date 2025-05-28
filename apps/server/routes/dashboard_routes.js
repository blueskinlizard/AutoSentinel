const db = require("../prisma/queries.js")
const express = require('express')

const router = express.Router();

router.post("/fetch_dashboard", async(req, res) =>{
    const { dashboard_identification } = req.body;
    try{
        const fetched_dashboard = await db.fetchDashboard(dashboard_identification);
        return res.status(200).json({fetched_dashboard})
    }catch(error){
        return res.status(500).json({message: `Error fetching dashboard for user: ${user_id}, returned with error: ${error}`})
    }
})

router.post("/delete_dashboard", async(req, res) =>{
    const { dashboard_identification } = req.body;
    try{
        await db.deleteDashboard(dashboard_identification);
        return res.status(200).json({mesage: `Dashboard with id: ${dashboard_identification} successfully deleted`})
    }catch(error){
        return res.status(500).json({message: `Error in deleting dashboard with id: ${dashboard_identification}, returned with error: ${error}`})
    }
})

router.post("/create_dashboard", async(req, res) =>{
    const { dashboard_name } = req.body;
    try{
        if(!req.user){ return res.status(500).json({message: `Error in creating dashboard, user not logged in3 `})}
        const fetched_userObject = await db.findUserByName(req.user.name);
        await db.createDashboard(dashboard_name, fetched_userObject.id);
        return res.status(200).json({message: `Successfully created dashboard with name ${dashboard_name} for user: ${req.user.name}`})
    }catch(error){
        return res.status(500).json({message: `Error in creating dashboard with name: ${dashboard_name}, returned with error: ${error}`})
    }
})






module.exports = router;