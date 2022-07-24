import { blueGrey } from '@mui/material/colors';
// import { display } from '@mui/system';
import React,{useState} from 'react';
import { BsMic} from "react-icons/bs";
// import { useReactMediaRecorder, } from "react-media-recorder";

const Hook=()=>{
  const [btnactive,setbtnactive]=useState(false);
  const showMic1=()=>{
    setbtnactive(true)
  }
    return(
    <>  
        <p>{btnactive}</p>
        <button
        style={{
          padding:20,
          margin:50,
          backgroundColor:blueGrey,
        }}
        onClick={showMic1}
        >
       </button>
        <button
        style={{
          padding:20,
          margin:50,
          backgroundColor:blueGrey,
        }}
        onClick={showMic1}
        >
        <BsMic style={{height:25,width:25}}/>
       </button>

    </>
    )
}

export default Hook;