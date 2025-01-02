import { useEffect } from "react"
import { useState } from "react"
import Country from "../Country/Country"
import './Countries.css'

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedFlag = (country) => {
        const newVisitedFlags = [...visitedFlags, country]
        setVisitedFlags(newVisitedFlags)
    }

    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
        // console.log(countries)
    }, [])
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            {
                visitedCountries.map(country => <h3>{country.name.common}</h3>)
            }
            {
                visitedFlags.map((flag, idx) => <img key={idx} style={{ width: '100px' }} src={flag.flags.png} alt="" />)
            }
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca2}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                        country={country}></Country>)
                }
            </div>

        </div>
    )
}