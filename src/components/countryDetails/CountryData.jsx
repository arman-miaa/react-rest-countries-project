

const CountryData = ({ country, handleVisitedCountry, handlevisitedFlags }) => {
    console.log('inside  country data', country, handleVisitedCountry, handlevisitedFlags);
  return (
    <div>
      <p>
        <small>Country Data: {country.name.common} </small>
      </p>
    </div>
  );
};

export default CountryData;