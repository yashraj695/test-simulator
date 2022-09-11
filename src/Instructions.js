import React ,{useState} from "react";
import './instructions.css';
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const InstructionPage=()=>{
     const navigate = useNavigate();
     const [btnability,setBtnability]=useState(true);
     const Hexagon =({no})=>{
        const stl={
             backgroundImage:"linear-gradient(#68E131,#68E131, #6ABB46, #327812)",
             color:'white',
             margin:'0px 5px'
      
        }
          return <span style={stl} className="hexgn">
              {no}
               </span>
      } 
  
      const infBox=(
        <div className="infBox">
        <h3 style={{width:'fit-content',padding:'0px 5px',marginLeft:-50}}>General Instructions: <hr/> </h3>
        
         <p>1. Total duration of RRC Level-1 is 90 min.</p>
         <p>2. The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination.
            <br/> When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</p>
          <p>3. The Questions Palette displayed on the right side of screen will show the status of each question using one of the following symbols</p>  

          <p style={{display:'flex',alignItems:'center',marginLeft:35}}>1. <span style={{margin:'0px 5px',border:'1px solid black',borderRadius:2,backgroundColor:'#e3e3e3',width:28,height:25}}></span>
             You have not visited question yet  </p>

          <p style={{display:'flex',alignItems:'center',marginLeft:35}}>2. <Hexagon/> You have answered the question.  </p>

          <p style={{display:'flex',alignItems:'center',marginLeft:35}}>3. 
           <span className="hxin">  </span> You have not answered the question.  </p>

          <p style={{display:'flex',alignItems:'center',marginLeft:35}}>4. <span style={{color:'white',borderRadius:'50%',backgroundColor:'purple',padding:'15px',margin:'0px 5px'}}></span>
          You have NOT answered the question, but have marked the question for review.  </p>

          <p style={{display:'flex',alignItems:'center',marginLeft:35}}>5.
          <span style={{position:'relative',color:'white',borderRadius:'50%',backgroundColor:'purple',padding:15,margin:'0px 5px'}}>
          <span style={{position:'absolute',bottom:-3,right:-2, color:'green',fontSize:20}}><b>✔</b> </span>
          </span>The question(s) "Answered and Marked for Review" will be considered for evalution.</p>
          
        <p>4. The Questions Palette displayed on the right side of screen will show the status of each question using one of the following symbols</p>  
        <p>5. You can click on the " {">"}" arrow which apperes to the left of question palette to collapse the question palette thereby maximizing the question window.
             To view the question palette again, you can click on "{'<'}" which appears on the right side of question window.</p>  
        <p>6. The Questions Palette displayed on the right side of screen will show the status of each question using one of the following symbols</p>  

    <h3 style={{width:'fit-content',padding:'0px 5px',marginLeft:-50}}>Navigating to a Question: <hr/> </h3>
        <p>7. To answer a question, do the following:</p>
          <p style={{display:'flex',alignItems:'flex-start',marginLeft:35}}>a. <span style={{margin:'0px 5px'}}> Click on the question number in the Question Palette at 
          the right of your screen to go to that numbered question directly. 
          Note that using this option does NOT save your answer to the current question.</span></p>
          <p style={{display:'flex',alignItems:'flex-start',marginLeft:35}}>b. <span style={{margin:'0px 5px'}}>  Click on Save & Next to save your answer for 
          the current question and then go to the next question. </span></p>
          <p style={{display:'flex',alignItems:'flex-start',marginLeft:35}}>c. <span style={{margin:'0px 5px'}}> Click on Mark for Review & Next to save your answer 
          for the current question, mark it for review, and then go to the next question. </span></p>
    
    <h3 style={{width:'fit-content',padding:'0px 5px',marginLeft:-50}}>Answering a Question: <hr/> </h3>
        <p>8. Procedure for answering a multiple choice type question:</p>
          <p style={{display:'flex',alignItems:'flex-start',marginLeft:35}}>a. <span style={{margin:'0px 5px'}}> To select you answer, 
          click on the button of one of the options.</span></p>
          <p style={{display:'flex',alignItems:'flex-start',marginLeft:35}}>b. <span style={{margin:'0px 5px'}}>  To deselect your chosen answer, 
          click on the button of the chosen option again or click on the Clear Response button </span></p>
          <p style={{display:'flex',alignItems:'flex-start',marginLeft:35}}>c. <span style={{margin:'0px 5px'}}> To change your chosen answer, click on 
          the button of another option </span></p>
          <p style={{display:'flex',alignItems:'flex-start',marginLeft:35}}>c. <span style={{margin:'0px 5px'}}> To save your answer, you MUST click on the Save
           & Next button. </span></p>
          <p style={{display:'flex',alignItems:'flex-start',marginLeft:35}}>c. <span style={{margin:'0px 5px'}}> To mark the question for review, 
          click on the Mark for Review & Next button. </span></p>

        <p>9. To change your answer to a question that has already been answered, first select that question for answering and then
             follow the procedure for answering that type of question.</p>

    <h3 style={{width:'fit-content',padding:'0px 5px',marginLeft:-50}}>Navigating through sections: <hr/> </h3>
            <p>10. Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by click on the section name.
                The section you are currently viewing is highlighted.</p>
             <p>11. After click the Save & Next button on the last question for a section, you will automatically be taken to the first question of the next section.</p>
             <p>12. You can shuffle between sections and questions anything during the examination as per your convenience only during the time stipulated.</p>
             <p>13. Candidate can view the corresponding section summery as part of the legend that appears in every section above the question palette.</p>
            
             <hr style={{height:0.5,marginBottom:5,width:'110%',marginLeft:-50,border:'none'}}/>
         <p style={{color:'#9e4134',padding:5}}>Please note all questions will appear in your default language. 
         This language can be changed for a particular question later on.</p>

         <hr style={{height:0.5,marginBottom:5,opacity:0.75,width:'110%',marginLeft:-50,border:'none'}}/>

         <p style={{padding:0}}>
          <input id="chkbx" type="checkbox" name="agree" onClick={()=>{
            setBtnability(!btnability);
          }}  />
          I have read and understood the instructions. All computer hardware allotted to me are in proper
           working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited
           gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall.
           I agree that in case of not adhering to the instructions, I shall be liable to be 
          debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations
          </p>
          <center> 
          <button disabled={btnability} className='proceedbtn' id="pcdbtn" style={{width:'30%',alignItems:'center',color:'white',backgroundColor:'#45b558',padding:8,border:'none'}}
           onClick={()=>{
            navigate('/questionpage')
           }}
           > <b>PROCEED</b> </button>
          </center>
       </div>
    )

    return <div style={{overflowY:'scroll',height:'100vh'}}>
      <Navbar className='instrucnav'/>
      <div style={{marginTop:10,position:'relative',backgroundColor:'#d7d8db',padding:'20px 10px 10px 10px',height:'fit-content'}}>
        <h4 style={{display:'inline',color:'#021338',marginLeft:'20%'}}>GENERAL INSTRUCTIONS  </h4>
          <label className="dpl" htmlFor="language">Choose Your Default Language</label>
            <select className="dpd" name="language" >
              <option value="volvo">English</option>
              <option value="saab">Hindi</option>
              <option value="saab">Gujrati</option>
              <option value="saab">Marathi</option>
            </select>
        </div>
        <center><h2 style={{margin:6}}>Please read the instructions carefully </h2> </center>
         {infBox}
         
    </div>
}
export default InstructionPage;