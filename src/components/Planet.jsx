import React from 'react';

const Planet = (props) => {
    const { name, climate, terrain, surface_water, population  } = props.planet;
    return (
        <div>
            <br></br>
            <h2>{name}</h2>
            <br/>
            <h4>Climate: {climate} </h4>
            <h4>Terrain: {terrain} </h4>
            <h4>Surface Water: {surface_water}%</h4>
            <h4>Population: {population}</h4>
        </div>
    );
};


export default Planet;
