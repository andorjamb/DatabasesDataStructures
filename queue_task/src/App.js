import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import DisplayArray from './components/DisplayArray';

function App() {

  /*   const [randoms, setRandoms] = useState([]); */

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [queue, setQueue] = useState({ first: null, last: null, size: 0 });


  /*   let randomArray = [];
  
    const newArray = () => {
      randomArray = [];
      for (let i = 0; i < 10; i++) {
        let newNumber = Math.floor(Math.random() * 100);
        randomArray.push(newNumber);
      }
      setRandoms(randomArray);
    } */
  /*  class Queue {
     constructor(first, last, size) {
       this.first = null;
       this.last = null;
       this.size = 0;
     }
   } */

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  const enQueue = (e) => {
    console.log(e.target.id);
    let node = new Node(e.target.id);
    console.log(node);

    if (queue.length === 0) {
      setQueue(...queue, ...{
        first: e.target.key,
        last: e.target.key,
        size: 1
      })
      console.log(queue);

    }
    else {
      let currentLast = queue.last;
      console.log(currentLast);
      currentLast.next = e.target.key;
      setQueue(...queue, ...{
        last: e.target.key,
        size: this.size++
      })
      console.log(queue);

    }
  }
  /* 
  use push() and shift()
    This function accepts some value
    Create a new node using that value passed to the function
    If there are no nodes in the queue, set this node to be the first and last property of the queue
    Otherwise, set the 'next' property on the current queue 'last' to be that node, and then set the 'last' property of the queue to be that node.
    Increment the size of the queue by 1 */


  const deQueue = () => { }

  /*  Removing from the beginning of the Queue!
  If there is no first property, just return null
  Store the first property in a variable
  See if the first is the same as the last (check if there is only 1 node). 
  If so, set the first and last to be null
  If there is more than 1 node, set the first property to be the next property of first
  Decrement the size by 1R
  eturn the value of the node dequeued */



  useEffect(() => {
    setIsLoading(true);
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=30&offest=0')
      .then(res => {
        const fetches = res.data.results.map((p) => {
          return axios.get(p.url)
            .then((res) => res.data);
        });

        Promise.all(fetches)
          .then((res) => {
            setData(res);
            setIsLoading(false);
          })
      })
  }, [])


  return (
    <div className="App">
      <header><h1>Queue App</h1></header>
      {isLoading ? <p>Still loading...</p> :

        <main>


          <div>

            {data.map((item) => (
              <img id={item.order} onClick={(e) => enQueue(e)} src={item.sprites.other['official-artwork'].front_default} alt="pokemon" />))}

            {/*  <button id="getNumbers" onClick={newArray}>Get numbers</button>
            <DisplayArray array={randoms} /> */}


          </div>
          <div className='queue-container'>
            {/*           {queue.map((item) => { return <div className="queue-block"></div> })} */}
          </div>
          <div className='button-container'>
            <button id="enqueue" onClick={enQueue}>Enqueue</button>
            <button id="dequeue" onClick={deQueue}>Dequeue</button>
          </div>

        </main>
      }
    </div>
  );
}

export default App;
