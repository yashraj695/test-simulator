import React from "react";
import './hexagon.css'

export const Hexagon =({color,no,setQusNo})=>{
    const bi =(color==='g')?"linear-gradient(#68E131,#68E131, #6ABB46, #327812)":(color==='r')?"linear-gradient(#F36156,#DB2618,#B92318)"
     :(color==='p')?"linear-gradient(#6C2AA6,#6C2AA6)":"linear-gradient(#e3e3e3,#e3e3e3)";
    const clr =(color==='#c0c2c0')? 'black':'white';
    return <div style={{backgroundImage:bi,color:clr }} 
        onClick={()=>{
        setQusNo(no);
        }} className="hexagon">
        {no}
    </div>
}
const HexagonBox=({answer,setQusNo})=>{

    const finalresult=answer.map((a,i)=>{
        let e=a.opt;
        const color=(a.visited===false)?'#c0c2c0':(a.review)?'p':(e===0)?'r':'g';
        return <Hexagon color={color} no={i+1} key={i} setQusNo={setQusNo} />
    })
    return <div style={{margin:0,padding:0,backgroundColor:'#ccffff',border:'1px solid black'}}>
        <h4 className="qusheader">Choose a Question</h4>
      <div className="nodeBox">
        {finalresult}
    </div>
    </div>
}
export default HexagonBox;