
import React, { useState, useEffect } from 'react';
import DisplayArray from './components/DisplayArray';
import './App.css';

const App = () => {

  const [randoms, setRandoms] = useState([]);
  const [number, setNumber] = useState(null);
  const [stack, setStack] = useState([]);


  let stackArray = [];
  let randomArray = [];


  const newArray = () => {
    randomArray = [];
    for (let i = 0; i < 10; i++) {
      let newNumber = Math.floor(Math.random() * 100);
      randomArray.push(newNumber);
    }
    setRandoms(randomArray);
    console.log(randoms);
    setNumber(randoms[-1]);
    console.log(number);
  }

  function pushToStack() {
    stackArray.push(number);
    randomArray.pop();
    setRandoms(randomArray);
    setNumber(randoms[-1]);
    setStack(stackArray);
  }

  function popFromStack() {
    if (stack.length === 0) {
      return null;
    }
    else {
      console.log('stack', stack);
      stackArray.pop();
      setStack(stackArray);

    }

  }
  return (

    <div className="App" >
      <header><div className="title-container"><h1>Stack App</h1></div></header>
      <main className="container">
        <button id="getNumbers" onClick={newArray}>Get numbers</button>
        <h3>Some random numbers: </h3>
        <DisplayArray array={randoms} />
        <h3>The stack:</h3>
        <DisplayArray array={stack} />
        <h3>Push a new random number to the stack or remove a number:</h3>
        <button id="push" onClick={pushToStack}>Push</button>
        <button id="pop" onClick={popFromStack}>Pop</button>
      </main>
    </div>
  );
}
export default App;



