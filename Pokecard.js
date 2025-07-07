import React from 'react';
import "./Pokecard.css";

function Pokecard({ id, name, type, base_experience }) {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
        <h3>{name}</h3>
        <img src={imgSrc} alt={name} />
        <p>Type: {type}</p>
        <p>Exp: {base_experience}</p>
        </div>
    );
}

export default Pokecard;