const express = require('express')
const router = express.Router();
const crypto = require('crypto');
const fs = require('fs');
const db = require("../prisma/queries.js")
const path = require('path');
const { spawn } = require("child_process");


router.post("/new_image", async(req, res)=>{
    if(!req.user){ return res.status(500).json({message: `Failed to add image to local cam-cache, caused by lack of current user`})}
    const dataURL = req.body.dataURL;
    //Strip out prefix
    const UUID = crypto.randomUUID();
    const base64Data = dataURL.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const imagePath = path.join(__dirname, '..', 'cam-cache', `${UUID}.jpg`);
    fs.writeFileSync(imagePath, buffer);
    try{
        //I know I could uniformly use async/await stuff but I'm too stubborn for that
        await fs.promises.access(imagePath, fs.constants.F_OK | fs.constants.R_OK);
        runDetection(imagePath).then(async(detections) =>{
            //Return our detections here, console.log is just for debuggin:
            console.log("Detections:", detections);
            //Simple detection return
            if(Array.isArray(detections) && detections.find(obj => obj.class_id === 0)){
                //Given that detections may have multiple objects, making sure it is a list before accessing is important
                //Create incident here given that an API call is inefficient
                await db.createIncident(detections[0], buffer);
            }
            else{
                try{
                    await fs.promises.unlink(imagePath);
                    console.log(`File at ${imagePath} deleted successfully`);
                }catch(error){
                    console.error(`Error deleting file at ${imagePath}, caused by: `+error)
                }
            }
            return res.status(200).json({detections, UUID, message: "Detection ran!!!"})
        })
        .catch((error)=>{
            console.log("Error during detection: "+error)
            //This isn't ran if no detections are found, simply from a syntax error.
            res.status(500).json({ message: "Detection failed", error: error.message });
        })
    }catch(error){
        res.status(500).json({ message: "Failed to call detection API", error: error.message });
    }
    
})

function runDetection(imagePath) {

    return new Promise((resolve, reject) => {
        const process = spawn("python3", ["../../yoloservice/yolo_model.py", imagePath]);
        let data = "";
        process.stdout.on("data", (chunk) => {
            console.log("Python stdout:", chunk.toString());
            data += chunk;
        });

        process.on("close", (code) => {
            if (code !== 0) {
                reject(new Error(`Process exited with code: ${code}`));
            } else {
                try {
                    const lines = data.trim().split('\n').filter(line => line.trim().length > 0);
                    const jsonLine = lines.reverse().find(line => line.startsWith('[') || line.startsWith('{'));
                    const result = JSON.parse(jsonLine);
                    resolve(result);
                } catch (err) {
                    reject(new Error(`Failed to parse JSON: ${err.message}`));
                }
            }
        });
    });
}
module.exports = router;