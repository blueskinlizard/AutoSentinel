const db = require("../prisma/queries.js")
const express = require('express')

const router = express.Router();

router.post("/fetch_dashboard", async(req, res) =>{
    const { dashboard_identification } = req.body;
    try{
        const fetched_dashboard = await db.fetchDashboard(dashboard_identification);
        return res.status(200).json({fetched_dashboard})
    }catch(error){
        return res.status(500).json({message: `Syntax error fetching dashboard for user: ${user_id}, returned with error: ${error}`})
    }
})

router.post("/delete_dashboard", async(req, res) =>{
    const { dashboard_identification } = req.body;
    try{
        await db.deleteDashboard(dashboard_identification);
        return res.status(200).json({mesage: `Dashboard with id: ${dashboard_identification} successfully deleted`})
    }catch(error){
        return res.status(500).json({message: `Syntax error in deleting dashboard with id: ${dashboard_identification}, returned with error: ${error}`})
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
        return res.status(500).json({message: `Syntax error in creating dashboard with name: ${dashboard_name}, returned with error: ${error}`})
    }
})

router.get("/all_dashboards", async(req, res) =>{
    if(!req.user){ return res.status(500).json({message: `Error in fetching all user dashboards, user is not signed in`})}

    const { user_id } = await db.findUserByName(req.user.name).id; //Need to be fact checked on the validity of this novel property access

    if(user_id){ return res.status(500).json({message: `Error in fetching all user dashboards, failed to fetch id of user: ${req.user.name}`})}

    try{
        const ownedBoards = await db.fetchUserDashboards(user_id);
        return res.status(200).json({ ownedBoards })
    }catch(error){
        return res.status(500).json({message: `Syntax error in fetching all dashboards for user: ${req.user.name}`})
    }
})
//While the user id part is seemingly verbose, we use both /received_dashboards and /all_dashboards on the home page, where we must cease a fetch(given anyone can go to the homepage)
router.post("/received_dashboards", async(req, res) =>{
    if(!req.user){ return res.status(500).json({message: `Error in fetching all shared dashboards, user is not signed in`})}

    const { user_id } = await db.findUserByName(req.user.name).id;

    if(user_id){ return res.status(500).json({message: `Error in fetching all shared dashboards, failed to fetch id of user: ${req.user.name}`})}

    try{
        let shared_dashboards = [];
        const shared_dashboard_recipients = await db.fetchSharedDashboards(user_id);
        //While namng might be a little unorthodox, I am simply referring back to our dashboard recipients prisma model
        shared_dashboard_recipients.forEach(async dashboard_recipient => {
            const shared_dashboard_object = await db.fetchDashboard(dashboard_recipient.dashboardShareId);
            shared_dashboards.push(shared_dashboard_object);
        });
        return res.status(200).json({ shared_dashboards })
    }catch(error){
        return res.status(500).json({ message: `Syntax error while fetching shared whiteboards for user with name: ${req.user.name}, and id: ${user_id}, returned with error: ${error}`})
    }

})


module.exports = router;