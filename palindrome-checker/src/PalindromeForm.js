import React from 'react';
import './PalindromeForm.css';

const PalindromeForm = (props) => {

    /*     const button = document.getElementsByName('button');
        const userInput = document.getElementById('userInput');
     */

    return (
        <form>
            <label for="userInput"></label><input id="userInput" name="userInput" onChange={props.inputHandler}></input>
            <button type="submit" onSubmit={props.submitHandler}></button>
        </form>
    )

}



export default PalindromeForm;