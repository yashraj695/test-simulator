import React from "react";
import './Details.css'

const Hexagon =({no})=>{
  const stl={
       backgroundImage:"linear-gradient(#68E131,#68E131, #6ABB46, #327812)",
       color:'white'

  }
    return <div style={stl} className="hexgn">
        {no}
         </div>
}

const Details=({answer})=>{
   
   let v=0,mr=0,m=0,r=0,nv=0;
   
   for(let i=0;i<answer.length;i++){
     if(answer[i].visited==true && answer[i].opt==0)v++;
     if(answer[i].review==true && answer[i].opt==0)r++;
     if(answer[i].opt!=0 && answer[i].review==false)m++;
     if(answer[i].opt!=0 && answer[i].review==true)mr++;
     if(answer[i].visited==false)nv++;
    }
   

   const insBox={
     display:'flex',
     alignItems:'center',
     padding: '0px 25px 0px 10px',
     margin:0
   }
   const details={
    fontSize:10,
    fontWeight:600,
    margin:'-15px 5px 0px 2px',
    paddingBottom:0,
   }
    return <div style={{paddingBottom:5}}>
        <div style={insBox}>
          <Hexagon  no={m} />
          <span style={details} >Answered</span>
           <div className="hexinvrt"> {(v-r>=0)?v-r:v} </div>
          <span style={details} className='ns'> Not <br/> Answered  </span>
         </div>
         <div style={insBox}>
            <p style={{border:'1px solid black',borderRadius:2,backgroundColor:'#e3e3e3',padding:'2.5px 8px',fontSize:18,fontWeight:600,marginTop:5}}>{nv}</p>
          <span style={details} >Not Visited</span>
          <p style={{color:'white',borderRadius:'50%',backgroundColor:'purple',padding:'4px 11px',marginLeft:'auto',fontSize:18,fontWeight:600,marginTop:5}}>{r}</p>
          <span style={details} >Marked For <br/> Review</span>
         </div>
          <div style={insBox}>
          <p style={{position:'relative',color:'white',borderRadius:'50%',backgroundColor:'purple',padding:'4px 11px',fontSize:18,fontWeight:600,margin:0}}>{mr}
          <span style={{position:'absolute',bottom:-3,right:-2, color:'green',fontSize:20}}><b>✔</b> </span>
          </p>
          <span style={{fontSize:10,fontWeight:600,marginTop:-2,paddingLeft:3}} >Answered and Marked For Review
           <br/> {`(will be considered for evaluation)`}
          </span>
         </div>
    </div>
}
export default Details;