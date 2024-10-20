
import { useState } from 'react';
import './country.css'
import CountryDetails from '../countryDetails/CountryDetails';
const Country = ({ country, handleVisitedCountry, handlevisitedFlags }) => {
  // console.log(handleVisitedCountry);
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  // const passWithParams = () => handleVisitedCountry(country)

  // console.log(country);
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      {/* <div className={`country ${visited && 'visited'}`}> */}
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name: {name?.common}{" "}
      </h3>
      <img src={flags.png} alt="flag" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited{" "}
      </button>{" "}
      <br />
      <button onClick={() => handlevisitedFlags(country.flags.png)}>
        Add Flag
      </button>{" "}
      <br />
      <button onClick={handleVisited}>{visited ? "visited" : "Going"}</button>
      {visited ? "I have visited this country." : "i want to visited"}
          <hr />
          <CountryDetails
          
              country={country}
              handleVisitedCountry={handleVisitedCountry}
              handlevisitedFlags={handlevisitedFlags}
              
          ></CountryDetails>
      </div>
  );
};

export default Country;