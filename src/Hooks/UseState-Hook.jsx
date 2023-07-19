import React, { useState } from 'react'

function Hook1() {

  const [count, setcount] = useState(0)

  const increase = () => {
    setcount(count + 1);
  }

  const decrease = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  }

  return (
    <div>
      <h1>Count = {count}</h1>
      <div>
        <button onClick={() => { increase() }}>+1</button>
        <button onClick={() => { decrease() }}>-1</button>
      </div>
    </div>
  )
}

export default Hook1