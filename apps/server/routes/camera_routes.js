const express = require('express')
const router = express.Router();
const redis = require('redis')
const crypto = require('crypto');
const fetch = require('node-fetch');
const fs = require('fs');

const cache = redis.createClient({
    url: `redis://${process.env.REDIS_HOST || 'redis'}:${process.env.REDIS_PORT || 6379}`
});
cache.connect().catch(err => {
    console.error('Redis connection error:', err);
});


router.post("/new_image", async(req, res)=>{
    const dataURL = req.body.dataURL;
    //Strip out prefix
    const UUID = crypto.randomUUID();
    const base64Data = dataURL.replace(/^data:image\/jpeg;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    try{
        fs.writeFileSync(`../cam-cache/${UUID}.jpg`, buffer);
    }catch(error){
        return res.status(500).json({message: "Error adding file to cam-cache"})
    }
    try{
        const detection_response = await fetch(`http://localhost:8080/api/yolo_detect`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ UUID }),
            //Sent our UUID to the Yolo detect route so it knows where to access our image file
            credentials: "include"
        })
        //This is where our logic takes a pause for now
    }catch(error){
        console.error("Error calling /yolo_detect:", err);
        res.status(500).json({ message: "Failed to call detection API", error: err.message });
    }
    
})


router.post("/deleteImage", async(req, res)=>{
    res.json({ message: "Delete not yet implemented" });
})
module.exports = router;