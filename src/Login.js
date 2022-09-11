import React,{useContext}from "react";
import dataContext from "./contextApi/dataContext";
import Form from "./Form";
import Navbar from "./Navbar";

const sysStyle = {
    backgroundColor : 'black',
    padding: '0px 0px 0px 20px',
    display : 'flex',
    justifyContent: 'space-between'
}

const LoginPage =()=>{

  const ctxt = useContext(dataContext);
    return  <div>
         <Navbar/>
         <div style={sysStyle}>
            <div>
           <p style={{fontSize:20,margin:'5px',color:'white'}}>System No:</p>
           <p style={{fontSize:40,fontFamily:"revert-layer", color:'yellow',margin:0}}> {ctxt.state.sysno.toUpperCase()}</p>
           <p style={{ fontSize :16,color :'white',margin:'5px 0px 5px 5px'}}>
            Kindly get in touch with the invigilator if there are any discrepancies in the
             Name and Photograph displayed on the screen or if the photograph is not yours
           </p>
           </div>
           <div style={{display :'flex',flex:1,justifyContent:'flex-end'}}>
            <div>
             <p style={{color : 'white',fontSize:17}}>Candidate Name</p>
             <p style={{color:'yellow',fontSize:30,marginTop:-8,marginBottom:-8}}>{ctxt.state.name.toUpperCase()}</p>
             <p style={{color:'white',padding:0}}>Subject: <span style={{color:'yellow'}}>Level1</span> </p>
             </div>
             <div style={{width :'150px',height :'155px', marginLeft:50,border:'0.5px solid black',
             display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
             <img style={{width :'105px',border:'0.5px solid black' ,height :'100px'}} 
             src={ctxt.state.url} alt="" />
             </div>
             
           </div>
         </div>
          <Form/>
       </div> 
    }
export default LoginPage;