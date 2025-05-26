const db = require("../prisma/queries.js")
const express = require('express')

const router = express.Router();

router.post("/fetch_dashboard", async(req, res) =>{
    const user_id = req.user;
    try{
        const fetched_dashboard = await db.fetchDashboard(user_id);
        return res.status(200).json({fetched_dashboard})
    }catch(error){
        return res.status(500).json({message: `Error fetching dashboard for user: ${user_id}, returned with error: ${error}`})
    }
})









module.exports = router;