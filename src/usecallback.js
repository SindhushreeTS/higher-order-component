import ChildComponent from './ChildComponent'
import { useState, useCallback } from 'react'

const ParentComponent = () => {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState('')

  const updateCounterFromChild = useCallback(() => setCounter(counter + 1), [
    counter,
  ])

  return (
    <div>
      <h1>Parent Component {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />

      <ChildComponent
        counter={counter}
        updateCounter={updateCounterFromChild}
      />
    </div>
  )
}

export default ParentComponent

import { useEffect, memo, useMemo } from 'react'

const ChildComponent = ({ counter, updateCounter }) => {
  console.log('Child is rendering')
  const childnumber = useMemo(() => {
    let output = 0
    for (let i = 0; i < 100000000; i++) {
      output++
    }
    return output
  }, [])
  return (
    <div>
      <h2>
        ChildComponent- {childnumber} {counter}
      </h2>
      <button onClick={updateCounter}>Click Child</button>
    </div>
  )
}

export default memo(ChildComponent)

import ParentComponent from './ParentComponent'
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ParentComponent />
    </div>
  )
}
