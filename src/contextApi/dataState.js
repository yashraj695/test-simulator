import React,{useState} from "react";
import dataContext from "./dataContext";

const DataState=(props)=>{
    const [state,setState]=useState({
         "name":"Roshan Kumar",
         "roll" : 2021457896354,
         "sysno":"C005",
         "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUGzSUbfQVEgY4TH7CZEl14ED8WXrixgU9A&usqp=CAU",
         "url2":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUGzSUbfQVEgY4TH7CZEl14ED8WXrixgU9A&usqp=CAU"

    });
    
    return(
        <dataContext.Provider value={{state,setState}}>
            {props.children}
        </dataContext.Provider>
    )

  }
export default DataState;