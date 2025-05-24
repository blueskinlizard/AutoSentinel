const express = require('express')
const router = express.Router();
const fs = require('fs');
const { spawn } = require("child_process");

router.post("/yolo_detect", async(req, res)=>{
    const UUID = req.body.UUID;
    if (!UUID) {
        return res.status(400).json({ message: "Missing UUID in request body" });
    }
    runDetection(`../cam-cache/${UUID}.jpg`).then((detections) =>{
        //Return our detections here, console.log is just for debuggin:
        console.log("Detections:", detections);
        //Simple detection return
        return res.status(200).json({detections})
    })
   .catch((error)=>{
        console.log("Error during detection: "+error)
        //This isn't ran if no detections are found, simply from a syntax error.
        res.status(500).json({ message: "Detection failed", error: error.message });
    })
})

function runDetection(imagePath) {

    return new Promise((resolve, reject) => {
        const process = spawn("python3", ["detect.py", imagePath]);
        let data = "";
        let error = "";
        process.stdout.on("data", (chunk) => {
            data += chunk;
        });

        process.stderr.on("data", (chunk) => {
            error += chunk;
        });

        process.on("close", (code) => {
            if (code !== 0) {
                reject(new Error(`Process exited with code ${code}\n${error}`));
            } else {
                try {
                    const result = JSON.parse(data);
                    resolve(result);
                } catch (err) {
                    reject(new Error(`Failed to parse JSON: ${err.message}`));
                }
            }
        });
    });
}

module.exports = router;