import React,{useState,useEffect} from 'react'
import './landingpage.scss'
import { BsMic} from "react-icons/bs";
import ReactPlayer from 'react-player';
import { useReactMediaRecorder, } from "react-media-recorder";

const TestLanding = () => {

    const {status,startRecording,stopRecording,mediaBlobUrl}= useReactMediaRecorder({ audio:true ,echoCancellation: true});
useEffect(()=>{
    if(status==='stopped'){
        console.log("inside avatarr")
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

            // const link = document.createElement("a");   //creating a ankar tag for the link
            // link.href = mediaBlobUrl;                    //a.href
            // link.download='Test_1.wav';                //download the link
            // link.click();
               createFile(mediaBlobUrl)
               .then(resp=>{
                // HTTP CALL AS A FORM DATA: PS SEND A FILE
                console.log(resp)
                var data = new FormData()
                data.append('audio', resp)
                fetch('http://localhost:8000/audio', {
                    method: 'POST',
                    body: data
                  })
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
        setCount(1);    
    }
};

  return (
        <div className="top">
            <div className="left">
            </div>
            <div className="middle">
                <h2>Data Gathering</h2>
                <div className="middle_div">
                    <h2 className='please'>Please</h2>
                    <p>Read and record the text below.</p>
                    <div className="card">
                        <p className='textLabel'>हामीले  हामीलाई एउटा मद्दत </p>
                        <button  
                        style={{
                            border: isActive? 'solid 1px #00b33c':'',
                            backgroundColor:isActive? '#00b33c':'',  
                        }}  
                        onClick={handleClick}                     
                        className='button'>
                            <BsMic className='mic'/>
                        </button> 
                    </div>
                </div>
                <div className='aboutUs'>
                    <h3 style={{
                        textAlign:'center',
                        fontStyle: 'normal',
                        fontWeight:500,
                        fontSize: 25,
                        lineHeight:3
                        }}>About Us</h3>

                    <ReactPlayer
                    width='90%'
                    height={500}
                    className='video'
                    url='https://youtu.be/XXxOfUTD7Bw'/>

                    <p className='aboutText'>
                    <p style={{fontSize:20,fontWeight:500}}>FAQs</p>
                        <span style={{fontWeight:600}}>What is data gathering application?</span>
                        <br />
                        The Data gathering app is a mobile application from which we are trying to collect nepali voices.
                        <br />
                        <span style={{fontWeight:600}}>What can we do with this collected Nepali Voice?</span>
                        <br />
                        This Dataset of nepali voice helps us in many future AI projects.
                        Many big companies do not provide their datasets to the public so through our application, we are trying to build an open source voice dataset for Nepali languages.
                        Now you can donate your Voice to help us create an open source voice database and be a part of upcoming AI projects.
                        <br />
                        <span style={{fontWeight:600}}>How to use this application?</span>
                        <br/>
                        To use this application you just need to speak the Nepali Sentences shown on your screen by clicking on the mic button and when the backgroundcolor of the mic turns green.Also unclicking the mic button stops the recording. In this way, you can contribute your voice.
                    </p>
                </div>
            </div>
            <div className="right">
            </div>
        </div>      
  )
}

export default TestLanding;
