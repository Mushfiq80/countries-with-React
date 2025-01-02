import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
    const { name, capital, population, region, flags, cca3 } = country

    const [visited, setVisited] =useState(false);
    const handleVisit = () => {
        setVisited(!visited);
    }

    const visitedFlag = () => handleVisitedFlag(country);
    return (
        <div className="country">
            <div>
                <h3>Name: {name?.common}</h3>
                <p>Capital: {capital}</p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Code: {cca3}</p>
                <button onClick={() => handleVisitedCountry(country)} className='btn-info'>{visited ? 'Marked' : 'Mark Visited'}</button>
            </div>
            <div className='right-side'>
                <img onClick={visitedFlag} className='img' style={{ width: '100px' }} src={flags?.png} alt="" />
                <button onClick={handleVisit} className='btn-info'>{visited ? 'Visited' : 'Going'}</button>
            </div>
        </div>
    );
};


export default Country;