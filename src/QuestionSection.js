import React,{useState,useEffect,useContext} from "react";
import Navbar from "./Navbar";
import QuestionBox from "./QuestionBox";
import './questions.css';
import Timer from './Timer';

import {qus as data}  from './Data/qus';
import { Watermark } from '@hirohe/react-watermark';
import HexagonBox from "./hexagon";
import Details from "./Details";
import dataContext from "./contextApi/dataContext";
import { useNavigate } from "react-router-dom";


const QuestionPage = ()=>{

const navigate=useNavigate();
const ctxt = useContext(dataContext);
const [qusNo,setQusNo]=useState(1);
const roll =ctxt.state.roll;
const name=ctxt.state.name.toUpperCase();
const imgurl = ctxt.state.url;

let a =new Array();
for(let i=0;i<100;i++)a.push({opt:0,visited:false,review:false});

const [answer,setAnswer]=useState(a);

useEffect(() => {

    if(answer[qusNo-1].opt==0){
        document.getElementById('option1').checked=false;
        document.getElementById('option2').checked=false;
        document.getElementById('option3').checked=false;
        document.getElementById('option4').checked=false;
    }
    else{
        let x=answer[qusNo-1].opt;
        document.getElementById(`option${x}`).checked=true;
    }
},[answer]);

useEffect(()=>{
    const temp =answer.slice()
    temp[qusNo-1].visited=true;
    setAnswer(temp);
},[qusNo])


const uncheckOption=()=>{
    const ans = answer.slice();
    ans[qusNo-1].opt=0;
    setAnswer(ans);
}

return <div>
    <Navbar/>
    <div style={{backgroundColor:'black',color:'white',display:'flex',justifyContent:'space-between',padding:'0px 18px 0px 12px'}}>
    <p style={{margin:'5px 0px',padding:0}}>{name}</p>
    <p style={{margin:'5px 0px',padding:0}}>Question Paper <span style={{visibility:'hidden'}}>hhh</span> View Instructions</p>
    </div>
    <div className="container">
        <div className="ques">

        <p style={{padding:'-2px 18px',fontSize:16,margin:'0px',lineHeight:2,backgroundColor:'beige'}}> 
         <span style={{border:'1.5px solid black',padding:'5px 10px',margin:'0px 8px'}}>Level 1  
         <span style={{borderRadius:'50%',padding:'0px 6px',marginLeft:2,backgroundColor:'#33adff',color:'white'}}>i</span></span> </p>
        <hr/>

         <h4 style={{padding:'0px 5px',fontSize:20,display:'inline-block',margin:'2px 10px'}}>{`Section`}</h4>
          <Timer/>
         <hr/>

           <p style={{padding:'-2px 0px',fontSize:16,margin:'0px',lineHeight:2}}> 
           <span style={{border:'1.5px solid black',padding:'5px 10px',margin:'0px 8px'}}>Level 1  
         <span style={{borderRadius:'50%',padding:'0px 6px',marginLeft:2,backgroundColor:'#33adff',color:'white'}}>i</span></span> </p>
          <hr/>

         <p style={{padding:'0px 18px',fontSize:16,margin:'0px',lineHeight:1.5,textAlign:'right'}}> <b>
         <span style={{padding:'0px 10px',margin:'0px 8px'}}>Marks for correct answer 1 negative marks
             <span style={{color:'red'}}> 1/3</span>  </span> </b> </p>
             <hr/>
           
        <div style={{display:'flex',justifyContent:'flex-end',padding:'3px 20px',justifyItems:'center',backgroundColor:'#0f30a6',margin:0}}>
            <label className="droplabel" htmlFor="language">View in</label>
            <select className="dropdown" name="language" id="cars">
              <option value="volvo">English</option>
              <option value="saab">Hindi</option>
            </select>
        </div>
          <Watermark text={roll} gutter={15} opacity={0.35} style={{minHeight:'60%'}}>
        <QuestionBox data={data[(qusNo-1)]} answer={answer} setAnswer={setAnswer}/>
        </Watermark>
         <div className="button-groups">
             {/* <hr style={{marginBottom:5}}/> */}
            <button onClick={()=>{
                let temp=answer.slice();
                temp[qusNo-1].review=!temp[qusNo-1].review;
                setAnswer(temp);
                setQusNo(qusNo+1);
                }} > Mark for Review & Next</button>
            <button onClick={uncheckOption}>Clear Response</button>
            <div style={{float:'right',backgroundColor:'#ccffff',height:'100%',width:'260px',marginLeft:25,borderLeft:'1px solid grey'}}>
            {/* <button style={{ marginLeft:105,padding:'8px 0px',width:80,backgroundColor:'#0066ff',borderRadius:2}}>Submit</button> */}
            <button style={{ marginLeft:105,width:80,color:'white',marginRight:5,backgroundColor:'blue',padding:'5px 10px'}}
            onClick={()=>navigate('/endpage')}>Submit </button>
            </div>
            <button style={{float:'right',color:'white',marginRight:5,backgroundColor:'blue',padding:'0px 10px'}} 
            onClick={()=>{
                let temp =answer.slice();
                if(temp[qusNo-1].review==true)temp[qusNo-1].review=false;
                setAnswer(temp);
                setQusNo(qusNo+1);
            }}>Save & Next</button>

        </div>
        </div>
                                         {/* Second Section */}
        <div className="marks">
            <div className="imageBox">
            <img style={{width :'80px',marginRight: 5 ,height :'80px'}} 
             src={imgurl} alt="image" />
             <img style={{width :'80px',height :'80px'}} 
             src={imgurl}  alt="image" />
            </div>
            <h3 style={{margin:0,borderLeft:'1px solid black'}}> <center>{roll}</center>  </h3>
            <div className="instructions">
                <Details answer={answer}/> 
               <p style={{backgroundColor:'blue',margin:0,padding:'4px 5px',color:'white'}}>Level 1</p>
            </div>
           <HexagonBox answer={answer} setQusNo={setQusNo}/>
         </div>

    </div>
   
</div>
}
export default QuestionPage;