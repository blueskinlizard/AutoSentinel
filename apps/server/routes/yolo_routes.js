const express = require('express')
const router = express.Router();
const fs = require('fs');
const { spawn } = require("child_process");

router.post("yolo_detect", async(req, res)=>{
   runDetection(`../cam-cache/${UUID}.jpg`)
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