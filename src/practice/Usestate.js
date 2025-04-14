import '../App.css';
import {useState} from "react";
function Usestate() { 
let [counter,setCounter]=useState(0)
let increment=()=>{

  setCounter(counter++);

}
let decrement=()=>{
  if(counter>0){
    setCounter(counter--);
  
  }
}
  return (
   
      <div className='counter'>
          <h1 style={{color:"blue"}}>Calculate</h1>
          <h1>{counter}</h1>
          <button onClick={increment}>INCREMENT</button>
          <button onClick={decrement}>DECREMENT</button>
      </div>
      
  )
}

export default Usestate;