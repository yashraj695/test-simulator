import React,{useContext} from "react";
import { Link } from "react-router-dom";
import dataContext from "./contextApi/dataContext";


const Secrets=()=>{
    const context = useContext(dataContext);
    
    return  <div style={{margin: '10% auto',width:'fit-content',border:'1px solid black'}}>

        
    <p style={{display:'flex',padding:5,justifyContent:'space-between'}}>Name </p> 
    <input 
    onChange={(e)=>{
        let temp = context.state;
        temp.name=e.target.value;
        context.setState(temp);
     }}
    type={Text}/>

    <p style={{display:'flex',padding:5,justifyContent:'space-between'}}>Roll</p>
    <input onChange={(e)=>{
       let temp = context.state;
       temp.roll=e.target.value;
       context.setState(temp);
    }}  type={Number}/>
    
    
    <p style={{display:'flex',padding:5,justifyContent:'space-between'}}>Image Url Drive </p>
    <input 
    onChange={(e)=>{
        let temp = context.state;
        temp.url=e.target.value;
        context.setState(temp);
     }}
    type={Text}/>
    
    <p style={{display:'flex',padding:5,justifyContent:'space-between'}}>image2</p>
    <input 
    onChange={(e)=>{
        let temp = context.state;
        temp.url2=e.target.value;
        context.setState(temp);
     }}
    type={Text}/>
    
    <p style={{display:'flex',padding:5,justifyContent:'space-between'}}>System No </p>
    <input 
    onChange={(e)=>{
        let temp = context.state;
        temp.sysno=e.target.value;
        context.setState(temp);
     }}
    type={Text}/>
    <Link style={{margin:20,border:'1px solid black',textDecoration:'none'}} to={'/login'}>Save and Start</Link>
</div>
}
export default Secrets;