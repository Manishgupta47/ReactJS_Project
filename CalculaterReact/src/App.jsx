import "./CalApp.css";
import './App.css'
import ButtonContainer from "./ButtonContainer";
import Display from "./Display";
import { useState } from "react";


function App() {
  let [calVal, setCalVal]= useState(" ");

  const onSubmitClick= (buttonText )=>{
    if (buttonText=== "c") {
      setCalVal(" ");
      
    }else if (buttonText === "=") {
       const result = eval(calVal);
       setCalVal(result);
      
    }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }

  }
 

  return (
    <>
      <div  classNamenamenameName='Calculater'>
         <Display displayValue= {calVal} />
         <ButtonContainer onSubmitClick={onSubmitClick} />
      </div>
    </>
  ) 
}

export default App
