import React,{memo} from 'react'
import HigherOrderComponent from './HigherOrderComponent'


const Counter = ({count,increment}) => {

  console.log('Counter rendered')
  return(
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default HigherOrderComponent(memo(Counter))