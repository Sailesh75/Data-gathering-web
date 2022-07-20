import React from 'react'
import './landingpage.scss'
import { BsMic} from "react-icons/bs";
import ReactPlayer from 'react-player';

const LandingPage = () => {
  return (
        <div className="top">
            <div className="left">
                {/* <p>Hellow</p> */}
            </div>
            <div className="middle">
                <h2>Data Gathering</h2>
                <div className="middle_div">
                    <h2 className='please'>Please</h2>
                    <p>Read and record the text below.</p>
                    <div className="card">
                        <p className='textLabel'>हामीले  हामीलाई एउटा मद्दत </p>
                        <button  
                        // style={{onClick? }}
                        onClick={()=>{console.log('clicked!!')}} 
                        className='button'>
                            <BsMic/>
                        </button> 
                    </div>
                </div>
                {/* <img  className='imgDiv' src={require('../../src/assests/banner.jpg')} alt='gif pic'/> */}
                <div className='aboutUs'>
                    <h3 style={{
                        textAlign:'center',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 20,
                        lineHeight:3
                        }}>About Us</h3>

                    <ReactPlayer
                    // style={{paddingBottom:20}}
                    width='90%'
                    className='video'
                    url='https://www.youtube.com/watch?v=LXb3EKWsInQ'/>
                    {/* <iframe src='https://www.youtube.com/watch?v=LXb3EKWsInQ'></iframe> */}
                    <p>What is this data gathering app?
                        <br />
                        The Data gathering app is a mobile application from which we are trying to collect nepali voices.
                        <br />
                        What can we do with this collected Nepali Voice?
                        <br />
                        This Dataset of nepali voice helps us in many future AI projects.
                        Many big companies do not provide their datasets to the public so through our application, we are trying to build an open source voice dataset for Nepali languages.
                        Now you can donate your Voice to help us create an open source voice database and be a part of upcoming AI projects.
                        <br />
                        To use this app you just need to speak the Nepali Sentences showing on your screen by clicking on the mic button and donating your voice.
                    </p>
                </div>
            </div>
            <div className="right">
            </div>
        </div>      
  )
}

export default LandingPage;
