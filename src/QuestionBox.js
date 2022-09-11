import React,{useState} from "react";
import './questions.css'


export default function QuestionBox ({data,answer,setAnswer}){
    const stylebox={
        padding: '5px 15px 0px 15px',
        marginTop:0,
        minHeight:'100vh'
    }

    const markAnswer=(id)=>{
         let temp =answer.slice();
         temp[data.no-1].opt=id;
         setAnswer(temp);
    }

    return <div style={stylebox}>
    <h3 style={{margin:0}}>Question no {data.no} </h3>
    <p style={{maxWidth:'60%',fontSize:18}}>{data.qus}</p>
    <input type="radio" id="option1" className="radio" name="fav_language" value="HTML" onClick={()=>markAnswer(1)}/>
    <label htmlFor="html">{data.opt1}</label><br/>
    <input type="radio" id="option2" className="radio" name="fav_language" value="CSS" onClick={()=>markAnswer(2)}/>
    <label htmlFor="css">{data.opt2}</label><br/>
    <input type="radio" id="option3" className="radio" name="fav_language" value="JavaScript" onClick={()=>markAnswer(3)}/>
    <label htmlFor="javascript">{data.opt3}</label> <br/>
    <input type="radio" id="option4" className="radio" name="fav_language" value="JavaScript" onClick={()=>markAnswer(4)}/>
    <label htmlFor="javascript">{data.opt4}</label>
    </div>
}