const db = require("../prisma/queries.js")
const express = require('express')
const router = express.Router();

router.post("/new_incident", async(req, res)=>{
    const { incident_object, incident_imageData} = req.body;

    try{
        
    }catch(error){

    }
})
router.post("/delete_incident", async(req, res) =>{
    const {incident_object} = req.body;
    try{

    }catch(error){
        
    }
})

module.exports = router;