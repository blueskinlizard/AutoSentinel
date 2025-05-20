const db = require("../prisma_queries/queries.js")
const express = require('express')
const passport = require('../authentication/passport_login.js')

const router = express.Router();

router.post("/new_incident", async(req, res)=>{
    const { incident_object} = req.body;
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