import React from "react";
import "./style.css";
import Counter from './Counter'
import HoverCounter from './HoverCounter'
import SayHi from './SayHi'


export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>      
      <HoverCounter/>
      <SayHi/>
    </div>
  );
}
