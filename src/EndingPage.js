import React from "react";
import Navbar from "./Navbar";
import './EndingPage.css'
import { qusData } from "./Details";
const EndPage=()=>{
    const endpg={
        height:'100vh',
        width:'100vw',
        display:'flex',
    }
    return  <div >
        <Navbar/>
              <h4 style={{padding:5, backgroundColor:'#ADE4EB'}}><center> Exam Summary</center></h4>
              <div class="grid-container">
                    <div class="grid-item">
                        <p className="bgblue">Section Name</p>
                        <hr/>
                        <p>Level 1</p>
                    </div>
                    <div class="grid-item">
                        <p className="bgblue">100</p>
                        <hr/>
                        <p>100</p>
                    </div>
                    <div class="grid-item">
                        <p className="bgblue">Answered</p>
                        <hr/>
                        <p>{qusData.mi}</p>
                    </div>
                    <div class="grid-item">
                        <p className="bgblue">Not Answered</p>
                        <hr/>
                       <p>{qusData.nvi+qusData.ri}</p>
                    </div>
                    <div class="grid-item">
                        <p className="bgblue">Mark for Review</p>
                        <hr/>

                        <p>{qusData.ri}</p>

                    </div>
                    <div class="grid-item">
                        <p className="bgblue">Answered & Mark <br/> for Review</p>
                        <hr style={{marginTop:-10}}/>

                        <p>{qusData.mri}</p>
                    </div>
                    <div class="grid-item">
                        <p className="bgblue">Not Visited</p>
                        <hr/>
                        <p>{qusData.nvi}</p>
                    </div>
                 </div>
          </div>
}
export default EndPage;