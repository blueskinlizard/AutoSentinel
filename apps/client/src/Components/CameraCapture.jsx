import { useEffect, useState, useRef } from 'react';

export default function CameraCapture(){
  //Store videostream object
  const [videoStreams, setVideoStreams] = useState([]);
  //Store video references to dom
  const videoRefs = useRef([]);

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

  return (
    <div>
      <h2>All cameras</h2>
      <div>
        {videoStreams.map((_, i) => ( <video
            key={i}
            ref={el => (videoRefs.current[i] = el)}
            autoPlay
            playsInline
            width="320"
            height="240"
          />
        ))}
      </div>
    </div>
  );
};
