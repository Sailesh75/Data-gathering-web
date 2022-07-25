import React,{useEffect, useState} from 'react';
import { useReactMediaRecorder, } from "react-media-recorder";
import { BsMic} from "react-icons/bs";
import './test.scss'

const FinalTest=()=>{
const {status,startRecording,stopRecording,mediaBlobUrl}= useReactMediaRecorder({ audio:true ,echoCancellation: true});
useEffect(()=>{
    if(status==='stopped'){
        try{
        //     console.log("blob url is",mediaBlobUrl)
        //    fetch(mediaBlobUrl).then((r) =>{
        //     console.log("r is",r)
        //     let audioBlob= r.blob()
        //     console.log("audio blob is",audioBlob)
        //         const audioFile = new File([audioBlob], 'voice.wav', { type: 'audio/wav' });
        //         const formData = new FormData(); // preparing to send to the server
            
        //         formData.append('file', audioFile);  // preparing to send to the server
        //         console.log("audio is",formData)
        //     });


            // httpCall : axios 
            // Form data as 

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

               createFile(mediaBlobUrl)
               .then(resp=>{
                // HTTP CALL AS A FORM DATA: PS SEND A FILE
                console.log("HTTP CALL ",resp)
                
               })
              
            // console.log(mediaBlobUrl);
            // const link = document.createElement("a");   //creating a ankar tag for the link
            // link.href = mediaBlobUrl;                    //a.href
            // link.download='Test_1.wav';                //download the link
            // let resp=link.click();   
            // console.log("response0",resp)                           //click on the link
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
    console.log("inside else about to stop recording")
     stopRecording();
    console.log("inside else dtopped recording",status)

    // console.log("status of file is",response)
    // {mediaBlobUrl&& (downloadRecording())}
    // console.log(status);

        // if(status==='stopped'){
        //     try{
        //         console.log(mediaBlobUrl);
        //         const link = document.createElement("a");   //creating a ankar tag for the link
        //         link.href = mediaBlobUrl;                    //a.href
        //         link.download='Test_1.wav';                //download the link
        //         link.click();                              //click on the link
        //         console.log(`link is: ${link}`);      
        //     }catch(err) {
        //         console.error(err);
        //     }      
        // }  
    // if (mediaBlobUrl){
    //     downloadRecording();
    //     }
        setIsActive(false);
    }

// setTimeout(() => {

// }, 2000);
};
console.log("stus is",status)

// const downloadRecordingType='WAV';
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
    </div>
    )
}

export default FinalTest;