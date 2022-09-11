import React,{useContext} from "react";
import LockIcon from '@mui/icons-material/Lock';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Person2Icon from '@mui/icons-material/Person2';
import { useNavigate } from "react-router-dom";

const loginForm ={
    marginLeft :20,
    width : 400,
    margin:'80px auto',
    borderRadius:4,
    overflow:'hidden',
    backgroundColor:'#e6f0ff',
    
};
const inputBox={
    width:'90%',
    height:26,
    marginLeft:0
}

const Form =()=>{

    const navigate = useNavigate();
     return <div style={loginForm} >
          <p style={{backgroundColor:'#C8CBF4',fontSize:16,fontWeight:550,margin:0,padding:'12px 25px'}}>Login</p>

          <div style={{textAlign :'center',width:'100%'}}>
            <div style={{display:'flex',width:'90%',margin:'20px auto ',backgroundColor:'#C8CBF4'}}>
            <span style={{padding:'3px',height:24,border:'0.5px solid #8c8c8c'}}><Person2Icon/></span>
            <input placeholder="Roll No" style={inputBox} type="number" /> <br/>
            <span style={{padding:'3px 5px',height:24,border:'0.5px solid #8c8c8c'}}><KeyboardIcon/></span>
            </div>
            <div style={{display:'flex',width:'90%',margin:'20px auto',backgroundColor:'#C8CBF4'}}>
            <span style={{padding:'3px',height:24,border:'0.1px solid #8c8c8c'}}><LockIcon/></span>
            <input placeholder="DDMMYYYY" style={inputBox} type="password" /> <br/>
            <span style={{padding:'3px 5px',height:24,border:'0.1px solid #8c8c8c'}}><KeyboardIcon/></span>
            </div>
            <button style={{width:'90%',backgroundColor:'#4d94ff',height:32,fontSize:15,
            margin:'5px 0px 22px 0px',border:'none',borderRadius:3,color:'white'}} onClick={()=>{
                 navigate('/instructions');
            }}>Sign In</button>
            </div>
           </div>
}
export default Form