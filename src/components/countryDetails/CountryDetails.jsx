import CountryData from "./CountryData";


const CountryDetails = (props) => {
    // const { country, handleVisitedCountry, handlevisitedFlags } = props;
  return (
    <div>
          <h2>country Details </h2>
          <hr />
          {/* <CountryData
          
              country={country}
              handleVisitedCountry={handleVisitedCountry}
              handlevisitedFlags={handlevisitedFlags}
          
          >
              
          </CountryData> */}

          <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetails;