import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import WrongDroids from '../components/WrongDroids';
import Person from '../components/Person';
import Planet from '../components/Planet';


const Display = (props) => {
    const {category, id } = props;
    const [error, setError] = useState(false);
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                // const { name, height, mass, hairColor, skinColor } = response.data;
                setData(response.data);
                setError(false);
            })
            .catch(err => setError(true));
    }, [category, id])

    return (
        <div>
            {
                error ?
                <WrongDroids/>
                : category.toLowerCase() === "people" ?
                <Person person={data}/>
                : category.toLowerCase() === "planets" ?
                <Planet planet={data}/>
                :''
            }
        </div>
    );
};


export default Display;