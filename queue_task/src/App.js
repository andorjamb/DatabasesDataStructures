import './App.css';

/**optional additions if time:
 * animate little divs as they dequeue
 * random background-color generator for little div colors
 * button styling
 */

function App() {

  const enterQueue = () => { }

  const leaveQueue = () => { }

  return (
    <div className="App">
      <header><h1>Queue App</h1></header>
      <main><div className='queue-container'>

      </div>
        <div className='button-container'>
          <button id="enqueue" onClick="enterQueue">Enqueue</button>
          <button id="dequeue" onClick="leaveQueue">Dequeue</button>
        </div></main>


    </div>
  );
}

export default App;
