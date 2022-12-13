import React from 'react';

const DisplayArray = (props) => {

    const array = props.array;
    const cells = array.map((i) => (<td>{i}</td>))

    return (
        <p>&#91;
            <table>
                <tr>{cells}</tr>
            </table>&#93;</p>
    );
};

export default DisplayArray;