
import './App.css';
import { Component } from 'react';
import PalindromeForm from './PalindromeForm';


class App extends Component {
  state = {
    result: undefined,
  }

  evaluateInput = (e) => {
    e.preventDefault();
    const value = e.target.userInput.value.trim().toLowerCase();
    let values = value.split('');
    this.setState({ result: this.isPalindrome(values) });

  }

  setDefault = () => {
    this.setState({ result: null })

  }

  isPalindrome(input) {
    while (input.length > 1) {
      let i = input.shift();
      let j = input.pop();
      if (i === j) {
        this.isPalindrome(input);
      }
      else {
        return (false);
      }
    } return true;
  }

  render() {
    const showResult = () => {
      switch (this.state.result) {
        case true: return (<p className="green">It's a palindrome!</p>)
        case false: return (<p className="red">Not a palindrome</p>)

        default: return (<p>Test any string</p>)
      }
    }

    return (
      <div className="App" >
        <header><div className="title-container"><h1>Palindrome Checker</h1></div></header>
        <PalindromeForm
          submitHandler={(e) => { this.evaluateInput(e) }}
          result={showResult()}
          changeHandler={this.setDefault} />
      </div>
    );
  }
}
export default App;
