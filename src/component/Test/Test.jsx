import React from 'react';
import { useReactMediaRecorder, } from "react-media-recorder";

const Test=()=>{

    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
      } = useReactMediaRecorder({ audio:true });

      //to view/download the recorded url

      const viewRecording = () => {
        window.open(mediaBlobUrl, "_blank").focus();
  };
 

    return(
    <div>
        <p>{status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
        
        <audio src={mediaBlobUrl} controls autoPlay loop />
     
        {/* to view(open) the recorded url */}

        {/* {mediaBlobUrl && status && status === "stopped" && ( */}
    <button
      size="small"
      onClick={viewRecording}
      type="primary"
      icon="picture"
      className="viewRecording margin-left-sm"
    >
     View
    </button>
  {/* )} */}
    </div>
    )
}

export default Test;