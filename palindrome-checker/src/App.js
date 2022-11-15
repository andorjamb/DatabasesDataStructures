
import './App.css';
import PalindromeForm from './PalindromeForm';


const evaluateInput = () => {

}

const submitHandler = (e) => {
  e.preventDefault();
}

function App() {
  return (
    <div className="App">
      <PalindromeForm
        inputHandler= evaluateInput
        submitHandler= submitHandler />
    </div>
  );
}

export default App;
