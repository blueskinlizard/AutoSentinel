import { useEffect, useState, useRef } from 'react';

export default function CameraCapture(){
  //Store videostream object
  const [videoStreams, setVideoStreams] = useState([]);
  //Store video references to dom
  const videoRefs = useRef([]);
  const canvasRef = useRef([]);
  const snapshotInterval = 15003;
  useEffect(() => {
    const setupStreams = async () => {
        //Grant permissions first
        await navigator.mediaDevices.getUserMedia({ video: true });

        //Enumerate through devices
        //Find devices + cameras(more specific filtering)
        const devices = await navigator.mediaDevices.enumerateDevices();
        console.log("Devices:", devices)
        const cameras = devices.filter(device => device.kind === 'videoinput');

        if(cameras.length === 0){
            throw new Error("Camera not found");
        }
        //Set streams to fetched camera video
        const streams = await Promise.all(
        cameras.map(device =>
            navigator.mediaDevices.getUserMedia({
            video: { deviceId: { exact: device.deviceId } },
            audio: false,
            })
          )
        );
            setVideoStreams(streams);
        };
        setupStreams();
        return () => {
            videoStreams.forEach(stream =>
            stream.getTracks().forEach(track => track.stop())
            );
        };
    }, []);

  useEffect(() => {
    videoStreams.forEach((stream, index) => {
      if (videoRefs.current[index]) {
        //Set srcobject to be stream
        videoRefs.current[index].srcObject = stream;
      }
    });
  }, [videoStreams]);
  useEffect(() =>{
    const intervalId = setInterval(() => {
      //Loop through video elements and their respective Canvases
      videoRefs.current.forEach((video, index) =>{
        const canvas = canvasRef.current[index];
        if(video && canvas){
          //Save snapshot
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataURL = canvas.toDataURL('image/jpeg'); //Saves data in easy form to be sent to backend
          sendImageData(dataURL).catch(err =>
            console.log("Error sending image to backend: "+err)
          );
        }
      })
    }, (snapshotInterval));
    return () => clearInterval(intervalId);
  }, [snapshotInterval])
  const sendImageData = async(dataURL) =>{
    await fetch(`http://localhost:8080/api/new_image`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dataURL }),
        credentials: "include"
      })
  }
  
  return (
    <div>
      <h2>All cameras</h2>
      {//Loop through our videostream objects, create video elements, and hidden canvas to store image data
      }
      <div>
        {videoStreams.map((_, i) => ( 
          <div key={i}>
            <video ref={el => (videoRefs.current[i] = el)}
            autoPlay
            playsInline
            width="320"
            height="240"
            ></video>
            <canvas ref={el => (canvasRef.current[i] = el)}
            width="320"
            height="240"
            style={{ display: 'none' }}
            ></canvas>
          </div>
        ))}
         
      </div>
    </div>
  );
};
