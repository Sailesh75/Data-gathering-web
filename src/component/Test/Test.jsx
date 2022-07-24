import React,{useState} from 'react';
import { useReactMediaRecorder, } from "react-media-recorder";
import { BsMic} from "react-icons/bs";
import './test.scss'

const Test=()=>{

    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
      } = useReactMediaRecorder({ audio:true });

      //to view(open) the recorded url
      const viewRecording = () => {
      window.open(mediaBlobUrl, "_blank").focus();
  };
  
     //to download the recorded url
     const downloadRecordingPath='Test';
     const recordingNumber='1';
     const downloadRecordingType='WAV';

     const downloadRecording = () => {
      const pathName = `${downloadRecordingPath}_${recordingNumber}.${downloadRecordingType}`;
      try {
      // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      //   // for IE
      //   window.navigator.msSaveOrOpenBlob(mediaBlobUrl, pathName);
      // } else {
        // for Chrome
        const link = document.createElement("a");
        link.href = mediaBlobUrl;
        link.download = pathName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log(`${link}`);
      
      } catch (err) {
        console.error(err);
      }
   };

   const[isActive,setIsActive]=useState(false);
   let[count,setCount]=useState(1);
   const handleClick=()=>{
       setCount(count+1);
       if (count===1){
         setIsActive(current=>!current)
         startRecording();
       }
       else{
         stopRecording();
         setIsActive(false);
        //  setTimeout(() => {
        //  downloadRecording();
        //  window.location.reload();
        //  }, 5000);
       }
       setCount=0;
   };
 

    return(
    <div>
      <button
      style={{
      border: isActive? 'solid 1px #00b33c':'',
      backgroundColor:isActive? '#00b33c':'',  
      }}
      onClick={handleClick}>
       <BsMic className='mic'/>
       </button>
        <p>{status}</p>
        {/* <button onClick={startRecording}>Start Recording</button> */}
        {/* <button onClick={stopRecording}>Stop Recording</button>  */}
        <audio src={mediaBlobUrl} controls autoPlay loop />

  {/* to view(open) the recorded url */}

     {mediaBlobUrl && status && status === "stopped" && (
    <button
      size="small"
      onClick={viewRecording}
      type="primary"
      icon="picture"
      className="viewRecording margin-left-sm"
    >
     View
    </button>
 )}

{/* to download the recorded url */}

{downloadRecordingType &&
  mediaBlobUrl &&
  status &&
  status === "stopped" && (
    <button
   size="small"
   onClick={downloadRecording}
   type="primary"
   icon="download"
   className="downloadRecording margin-left-sm"
    >
    Download
    </button>
)}
    </div>
    )
}

export default Test;