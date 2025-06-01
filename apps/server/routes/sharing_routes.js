const db = require("../prisma/queries.js")
const express = require('express')

const router = express.Router();

router.get("/sharedDashboards", async(req, res)=>{
    if(!req.user){ return res.status(500).json({message: `Failed to fetch shared dashboards, lack of current user`})}
    try{
        const fetched_userObject = await db.findUserByName(req.user.name);
        const fetched_dashboardShare_ids = await db.fetchSharedDashboardIds(fetched_userObject.id);
        //Given our Prisma schema, this returns our DashboardRecipient models, which in turn contain a DashboardShare Id.
        let sharedDashboards = [];
        if(Array.isArray(fetched_dashboardShare_ids)){
            fetched_dashboardShare_ids.forEach(async dashboardShareId => {
                const fetched_dashboardShare = await db.fetchSharedDashboardIds(dashboardShareId);
                sharedDashboards.push(fetched_dashboardShare.dashboardId)
            })
        }

    }catch(error){
        return res.status(500).json({message: `Syntax error caught while fetching shared dashboards, error: ${error}`})
    }
})

router.post("/createSharedDashboard", async(req, res) =>{
    const { share_dashboard, dashboard_recipient } = req.body;
    if(!req.user){ return res.status(500).json({message: `Failed to fetch create shared dashboard, lack of current user`})}
    try{
        const fetched_userObject = await db.findUserByName(req.user.name);
        const recipient_object = await db.findUserByName(dashboard_recipient);
        if(!recipient_object){ return res.status(404).json({message: `Could not find user named: ${dashboard_recipient}`})}
        await db.createSharedDashboard(fetched_userObject.id, share_dashboard, recipient_object.id);
        return res.status(200).json({ message: `Shared new dashboard with id: ${share_dashboard} from user: ${req.user.name}, with user: ${recipient_object.name}`})
    }catch(error){
        return res.status(500).json({message: `Syntax error in sharing dashboard ${share_dashboard}, returned with error: ${error}`})
    }
})



module.exports = router;