import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'


const Counter = ({count,increment}) => {

  return(
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default HigherOrderComponent(Counter)