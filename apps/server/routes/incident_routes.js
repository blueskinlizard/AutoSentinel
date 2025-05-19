const db = require("../prisma_queries/queries.js")
const express = require('express')
const passport = require('../authentication/passport_login.js')

const router = express.Router();

router.post("/new-incident", async(req, res)=>{
    const { incident_type, incident_VideoData } = req.body;
    try{
        
    }catch(error){

    }
})
