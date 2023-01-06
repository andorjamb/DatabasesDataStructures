import React, { useState, useEffect } from 'react';

const Queue = ({ pokemons }) => {

    return (
        <div className="queue">
            {pokemons.map((item) => (
                <img id={item.id} key={item.id} src={item.sprites.other['official-artwork'].front_default} alt="pokemon" />))}
        </div>
    );
};

export default Queue;