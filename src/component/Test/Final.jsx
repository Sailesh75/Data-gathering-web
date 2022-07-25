import React,{useEffect, useState} from 'react';
import { useReactMediaRecorder, } from "react-media-recorder";
import { BsMic} from "react-icons/bs";
import './test.scss'

const Final=()=>{

const {status,startRecording,stopRecording,mediaBlobUrl}= useReactMediaRecorder({ audio:true ,echoCancellation: true});
useEffect(()=>{
    if(status==='stopped'){
        try{
            async function createFile(fileUrl){
                let response = await fetch(fileUrl);
                let data = await response.blob();
                let metadata = {
                  type: 'voice.wav'
                };
                let file = new File([data], "voice.wav", metadata);
                console.log("file is",file)
                return file
                // ... do something with the file or return it
              }

              //to download the file

            const link = document.createElement("a");   //creating a ankar tag for the link
            link.href = mediaBlobUrl;                    //a.href
            link.download='Test_1.wav';                //download the link
            link.click();


               createFile(mediaBlobUrl)
               .then(resp=>{
                // HTTP CALL AS A FORM DATA: PS SEND A FILE
                console.log("HTTP CALL ",resp)     
               })
              
        }catch(err) {
            console.error(err);
        }      
    }  
},[status])

const[isActive,setIsActive]=useState(false);
let[count,setCount]=useState(1);

const handleClick=async ()=>{
    setCount(count+1);
    if (count===1){
    setIsActive(current=>!current)
    startRecording();
    }
    else{
     stopRecording();
        setIsActive(false);
    }

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
       {/* <p>{status}</p> */}
    </div>
    )
}

export default Final;