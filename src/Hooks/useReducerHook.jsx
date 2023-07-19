import React ,{ useReducer } from 'react'

function Hook3() {

  const reducer = (state, action) => {
    switch(action.type) {
      case "increase" : console.log("inc"); return state=action.count+1;
      case "decrease" : console.log("dec"); return state=action.count-1;
      default: return state.count;
    }
  }

  const [count, setcount] = useReducer(reducer, 0);

  const increase = () => {
    setcount({type: "increase", count: count})
  }
  const decrease = () => {
    setcount({type: "decrease", count: count})
  }

  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={() => {increase()}}>+1</button>
      <button onClick={() => {decrease()}}>-1</button>
    </div> 
  )
}

export default Hook3