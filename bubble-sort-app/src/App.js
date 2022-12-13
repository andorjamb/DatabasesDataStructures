import './App.css';
import { useState } from 'react';
import DisplayArray from './DisplayArray';

const App = () => {
  const [arrayValues, setArrayValues] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);

  let randomArray = [];

  const newArrayHandler = () => {
    randomArray = [];
    for (let i = 0; i < 30; i++) {
      let newNumber = Math.floor(Math.random() * 100);
      randomArray.push(newNumber);
      setArrayValues(randomArray);
    }
  }

  const arrayDisplay = (array) => {
    array.map((element) => `${element}, `
    )
  }

  function selectionHandler(e) {
    if (e.target.value == 'bubbleSort') {
      console.log('bubble sort selected');
      bubbleSortArray(arrayValues);
    }

    else if (e.target.value == 'selectionSort') {
      console.log('selection sort selected');
      selectionSortArray(arrayValues);
    }



  }

  function bubbleSortArray(array) {
    for (let i = array.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let swapValue = array[j];
          array[j] = array[j + 1];
          array[j + 1] = swapValue;
        }
      }
    }
    setSortedArray(array);


  }

  function selectionSortArray(array) {
    for (let i = 0; i < array.length; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (i != min) {
        let oldValue = array[i] //value at former min index
        array[i] = array[min]; //set value at i to be current min value
        array[min] = oldValue;
      }
    }
    setSortedArray(array);
    return array;
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
          <h4>New array values:</h4>
          <DisplayArray array={arrayValues} />
          <form onChange={(e) => selectionHandler(e)}>
            <label htmlFor="sortMethod"><h3>2. Choose your sorting method: </h3></label>
            <select name="sortMethod" onChange={(e) => selectionHandler(e)} >
              <option value="bubbleSort">Bubble Sort</option>
              <option value="selectionSort">Selection Sort</option>
              <option defaultValue="no selection">no selection</option>
            </select></form>
          <h4>Sorted Array:</h4>
          <DisplayArray array={sortedArray} />

        </div>
      </main>
    </div>
  );
}

export default App;
