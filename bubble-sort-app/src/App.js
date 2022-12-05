import './App.css';
import { useState, useEffect, useRef } from 'react';
import AddValue from './AddValue'

const App=()=>{
const [arrayValues, setArrayValues] = useState([]);
const [value, setValue] = useState(null);

const input = useRef();

const submitHandler =(e,input)=>{
  e.preventDefault();
 }
 
useEffect(()=>{
 setArrayValues([...arrayValues, value])
  console.log(arrayValues);

}, [value]) 

  return (
    <div className="App">
      <header className="App-header"><h1>Sorting App</h1></header>
        <main>
          <div className='flex-container'>
         <h3>1. Make an array:</h3>
      <AddValue 
    
      submitHandler={(e)=>{submitHandler(e)} }/>
          
          <p>Enter a value in the field and click the button to add it to the array:</p>
          
          <p>	&#91; {arrayValues}     &#93;</p>
          <p></p>


          <label htmlFor="sortMethod"><h3>2. Choose your sorting method: </h3></label>
          <select name="sortMethod">
            <option value="bubbleSort">Bubble Sort</option>
            <option value="selectionSort">Selection Sort</option>

          </select>


</div>
        </main>
        
  
    </div>
  );
}

export default App;
