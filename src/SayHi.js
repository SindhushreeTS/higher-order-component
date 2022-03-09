import React,{useState, useEffect} from 'react'
import Counter from './Counter'


const SayHi = () => {
  
  const[message,setMessage] = useState('');

  useEffect(()=>console.log(message));

  const sayHi = () => {
   setMessage('Welcome React Developer');
  };
  
  const getlost = () => {
    setMessage(`Don't leave Me`);
   };

  
    return (
      <div>
      <h3>{message}</h3>
      <button onMouseOver={sayHi} onMouseOut={getlost}>Talk</button>
      <Counter/>
      </div>
    );  
}

export default SayHi