import React,{useState} from 'react';
import { useReactMediaRecorder, } from "react-media-recorder";
import { BsMic} from "react-icons/bs";
import './test.scss'

const FinalTest=()=>{
const {status,startRecording,stopRecording,mediaBlobUrl}= useReactMediaRecorder({ audio:true ,echoCancellation: true});

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
    // {mediaBlobUrl&& (downloadRecording())}
    if(status==='stopped'){
        try{
            const link = document.createElement("a");   //creating a ankar tag for the link
            link.href = mediaBlobUrl;                    //a.href
            link.download='Test_1.wav';                //download the link
            link.click();                              //click on the link
            console.log(`link is: ${link}`);  
    
        }catch(err) {
            console.error(err);
        }
    }

    // if (mediaBlobUrl){
    //     downloadRecording();
    //     }
        setIsActive(false);
    }



setTimeout(() => {
    
}, 2000);
};

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