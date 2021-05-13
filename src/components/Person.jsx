import React from 'react';

const Person = (props) => {
    const { name, height, mass, hair_color, skin_color  } = props.person;
    return (
        <div>
            <br></br>
            <h2>{name}</h2>
            <br/>
            <h4>Height: {height} cm</h4>
            <h4>Mass: {mass} kg</h4>
            <h4>Hair Color: {hair_color}</h4>
            <h4>Skin Color: {skin_color}</h4>
        </div>
    );
};


export default Person;