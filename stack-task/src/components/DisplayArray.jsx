import React from 'react';

const DisplayArray = ({ array }) => {
    const cells = array.map((i) => { return <td>{i}</td> })

    return (
        <>
            <table>
                <tbody><tr>{cells}</tr></tbody>
            </table>
        </>);
};

export default DisplayArray;