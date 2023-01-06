import React from 'react';

const DisplayArray = ({ array }) => {
    const cells = array.map((i) => { return <td key={i}>{i}</td> })

    return (
        <>
            <table>
                <tbody><tr>{cells}</tr></tbody>
            </table>
        </>);
};

export default DisplayArray;