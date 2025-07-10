import React from "react";


function Pokecard({ id, name, type, base_experience }) {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", textAlign: "center" }}>
        <h3>{name}</h3>
        <img src={imgSrc} alt={name} onError={(e) =>{
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/96?text=Image+Not+Found";
        }}/>
        <p>Type: {type}</p>
        <p>Exp: {base_experience}</p>
        </div>
    );
}

export default Pokecard;