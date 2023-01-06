
import React, { useState, useEffect } from 'react';
import DisplayArray from './components/DisplayArray';
import './App.css';

const App = () => {

  const [randoms, setRandoms] = useState([]);
  const [stack, setStack] = useState([]);
  const [text, setText] = useState("");

  let randomArray = [];

  const newArray = () => {
    setText("");
    randomArray = [];
    for (let i = 0; i < 10; i++) {
      let newNumber = Math.floor(Math.random() * 100);
      randomArray.push(newNumber);
    }
    setRandoms(randomArray);
  }

  function pushToStack() {
    if (text !== "") { setText(""); }
    if (randoms.length === 0) {
      setText("You are out of numbers! Get some more.");
      return null;
    }
    let number = randoms.pop()
    let stackArray = [...stack, number];
    setStack(stackArray);

  }

  function popFromStack() {
    if (stack.length === 0) {
      setText("Nothing left to pop. Push some more numbers.")
      return null;
    }
    let stackArray = [...stack];
    console.log(stackArray);
    stackArray.pop();
    console.log(stackArray);
    setStack(stackArray);

  }





  return (
    <div className="App" >
      <header><div className="title-container"><h1>Stack App</h1></div></header>
      <main className="container">
        <div className='button-container'><button id="getNumbers" onClick={newArray}>Get numbers</button></div>
        <h3>Some random numbers: </h3>
        <DisplayArray array={randoms} />
        <h3>The stack:</h3>
        <DisplayArray array={stack} />
        <h3>Push a new random number to the stack or remove a number:</h3>
        <span className="text">{text}</span>
        <div className='button-container'> <button id="push" onClick={pushToStack}>Push</button>
          <button id="pop" onClick={popFromStack}>Pop</button></div>

      </main>
    </div>
  );
}
export default App;



