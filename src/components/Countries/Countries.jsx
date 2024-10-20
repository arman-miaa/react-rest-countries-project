import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'


export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [visitedcountry, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    // console.log(countries);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    
    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        // console.log(country);
        const newVisitedCountries = [...visitedcountry, country];
        setVisitedCountry(newVisitedCountries);
    }

    const handlevisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    // remove item from an array in a state
    // use filter to seiect all the elements except the one you want to remove


  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited country */}
      <div>
        <h5>Visited Country {visitedcountry.length}</h5>
        <ul>
          {visitedcountry.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="flag-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag} alt="" />
        ))}
      </div>

      {/* display country */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            handleVisitedCountry={handleVisitedCountry}
            key={country.cca3}
                handlevisitedFlags={handlevisitedFlags}
                
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
}
