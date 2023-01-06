import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  //const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [queue, setQueue] = useState({ first: null, last: null, size: 0 });
  const [queuedPokemons, setQueuedPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);


  //const nodeValues = [];

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  const enQueue = (e) => {
    let node = new Node(e.target.id);
    //nodeValues.push(e.target.id);
    setQueuedPokemons([...queuedPokemons, node.value]);
    console.log('updated queuedPokemons', queuedPokemons);

    if (queue.size === 0) {
      console.log('detecting zero queue size');
      setQueue({
        ...queue,
        first: node,
        last: node,
        size: 1
      });
      return;
    }
    else {
      console.log('non-zero queue size:', queue.size);
      let currentLast = queue.last;
      let size = queue.size;
      currentLast.next = node;
      setQueue({
        ...queue,
        last: node,
        size: size + 1
      });
    }
  }

  const deQueue = () => {
    if (!queue.first) {
      return null;
    }
    let first = queue.first;
    if (first === queue.last) {
      setQueue({ ...queue, first: null, last: null, size: 0 })
    }
    else {
      let first = queue.first;
      let size = queue.size;
      setQueue({ ...queue, first: first.next, size: size - 1 });
      console.log(queue);
      setQueuedPokemons(queue);
      return first;

    }
  }

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
            setPokemons(res);
            setIsLoading(false);
          })
      })
  }, [])

  useEffect(() => {/* filter out the queued pokemons */
    console.log(queuedPokemons);
  },
    [queue]);


  return (
    <div className="App">
      <header><h1>Queue App</h1></header>
      {isLoading ? <p>Still loading...</p> :

        <main>
          <div>

            {pokemons.map((item) => (
              <img id={item.order} onClick={(e) => enQueue(e)} src={item.sprites.other['official-artwork'].front_default} alt="pokemon" />))}

          </div>
          <div className='queue-container'>

          </div>
          <div className='button-container'>

            <button id="dequeue" onClick={deQueue}>Dequeue</button>
          </div>
        </main>
      }
    </div>
  );
}

export default App;
