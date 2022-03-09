import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'


const HoverCounter = ({count,increment}) => {

  return(
    <div>
      <h3>{count}</h3>
      <button onMouseOver={increment}>Increment</button>
    </div>
  )
}

export default HigherOrderComponent(HoverCounter)