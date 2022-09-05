import React, {useState} from "react";

export const Challenge2 = ({value}) =>{
  
    const [ counter,setCounter ] = useState(value);
  
    const handleAdd = () => {
      setCounter(counter + 1)
    } 
  
    const handleSubsstract = () => {
      setCounter(counter - 1)
    } 
  
    const handleReset = () => {
      setCounter(value)
    }
  
    return (
      <>
        <h1> Counter </h1>
        <span> {counter} </span>
        <button onClick={() => handleAdd()}> +1</button>
        <button onClick={() => handleSubsstract()}> -1</button>
        <button onClick={() => handleReset()}> reset</button>
      </>
    )
}