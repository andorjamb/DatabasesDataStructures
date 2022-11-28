import React from 'react';
import './PalindromeForm.css';

const PalindromeForm = (props) => {

    return (
        <form onSubmit={props.submitHandler}>
            <label htmlFor="userInput">Test word:</label><input type="text" id="userInput" name="userInput" onChange={props.changeHandler}></input>
            <div className="result"> {props.result}</div>
            <p className="guide">Hit Enter to submit your string </p>
        </form>
    )

}

export default PalindromeForm;