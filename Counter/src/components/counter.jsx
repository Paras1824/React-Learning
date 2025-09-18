import { useState } from 'react'

function Count() {
  let [counter, setCounter]= useState(15)
  //let counter = 15;

  const addValue =() =>{
    console.log("Button Clicked!!! Value Now :",counter);
    //counter = counter + 1;
    if (counter < 20) {
      counter+=1;
    }
    else{
      counter = 20;
    }
    setCounter(counter);
  }
  
  const removeValue =() =>{
    console.log("Button Clicked!!! Value Now :",counter);
    if (counter > 0){ 
      counter = counter - 1;
    }
    else {
      counter = 0;
    }
    // counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value = {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default Count