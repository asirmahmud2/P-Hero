import React from 'react';
import './Country.css';

const Country = ({country}) => {
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt="" />
            <h2>Name: {country.name.common}</h2>
        </div>
    );
};

export default Country;