import React from "react";
const Navbar = ()=>{
   const navStyle={
    height:50,
    width:'45%',
   }
   const Navbar= {
    width: '100%',
    paddingTop:12 ,
    textAlign: 'center'
}
    return <div style={Navbar} >
        <img style={navStyle} src={require('./image/logonew.jpg')} alt="" />
    </div>
}
export default Navbar;