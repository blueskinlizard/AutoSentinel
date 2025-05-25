const express = require('express')
const router = express.Router();
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');


router.post("/new_image", async(req, res)=>{
    const dataURL = req.body.dataURL;
    //Strip out prefix
    const UUID = crypto.randomUUID();
    console.log("Incoming Data URL starts with:", dataURL.slice(0, 30));
    const base64Data = dataURL.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    try{
        const filePath = path.join(__dirname, '..', 'cam-cache', `${UUID}.jpg`);
        fs.writeFileSync(filePath, buffer);
    }catch(error){
        return res.status(500).json({message: "Error adding file to cam-cache", error: error.message});
    }
    try{
        await fetch(`http://localhost:8080/api/yolo_detect`, {
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
        res.status(500).json({ message: "Failed to call detection API", error: error.message });
    }
    
})


router.post("/deleteImage", async(req, res)=>{
    res.json({ message: "Delete not yet implemented" });
})
module.exports = router;