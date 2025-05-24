const express = require('express')
const router = express.Router();
const redis = require('redis')




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
    await fetch(`http://localhost:8080/api/yolo_detect`, {
        method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UUID }),
      //Sent our UUID to the Yolo detect route so it knows where to access our image file
    credentials: "include"
    })
})


router.post("/deleteImage", async(req, res)=>{

})
module.exports = router;