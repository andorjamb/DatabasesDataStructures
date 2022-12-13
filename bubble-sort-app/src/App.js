import './App.css';
import { useState } from 'react';

const App = () => {
  const [arrayValues, setArrayValues] = useState([]);
  const [sortType, setSortType] = useState([]);

  let randomArray = [];

  const newArrayHandler = () => {
    for (let i = 0; i < 30; i++) {
      let newNumber = Math.floor(Math.random() * 100);
      randomArray.push(newNumber);
      setArrayValues(randomArray => [...randomArray, newNumber]);
    }

    console.log(randomArray);

  }

  const arrayDisplay = (array) => {
    array.map((element) => `${element}, `
    )
  }

  function selectionHandler(e) {
    if (e.target.value == 'bubbleSort') { }

    else if (e.target.value == 'selectionSort') { }

  }

  function bubbleSortArray(array) {
    for (let i = array.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        console.log('array[j]', array[j])
        if (array[j] > array[j + 1]) {
          let swapValue = array[j];
          array[j] = array[j + 1];
          array[j + 1] = swapValue;
        }
        return array;
      }
      console.log(array);
      return (array);

    }

  }

  function selectionSortArray(array) {

  }

  return (
    <div className="App">
      <header className="App-header"><h1>Sorting App</h1></header>
      <main>
        <div className='flex-container'>
          <h3>1. Generate a new array:</h3>
          <div className="box">
            <button type="button" onClick={newArrayHandler}>get an array</button>
          </div>
          <h4>New Array:</h4>
          <p>&#91; {arrayValues} &#93;</p>
          <label htmlFor="sortMethod"><h3>2. Choose your sorting method: </h3></label>
          <select name="sortMethod" onChange={(e) => selectionHandler(e)}>
            <option value="bubbleSort">Bubble Sort</option>
            <option value="selectionSort">Selection Sort</option>

          </select>


        </div>
      </main>


    </div>
  );
}

export default App;
