import { useState } from "react";


const Country = ({ countryName, flag, onButtonClick, visited, countryDetails }) => {
    
  const [showDetails, setShowDetails] = useState(false);
  
  const displayinfo = () => {
    setShowDetails(!showDetails)
  };

  const getLanguages = (languages) => {
    // Convert the languages object into an array of language names
    const languageNames = Object.values(languages);
    return languageNames.join(', '); // Join language names with comma
  };
  
  
  return (
      <section>
        <h3>{countryName} {flag}</h3>
        <button onClick={onButtonClick}>{visited ? 'Visited' : 'Visit?'}</button>
        <button onClick={displayinfo}>{showDetails ? 'Less Info' : 'More Info'} </button>

        {showDetails && (
        <div>
          <h4>Country Details:</h4>
          <p>Capital: {countryDetails.countryCapital}</p>
          <p>Continent: {countryDetails.countryContinent}</p>
          <p>Population: {countryDetails.countryPopulation}</p>
          <p>Languages: {getLanguages(countryDetails.countryLanguages)}</p>
        </div>
      )}
  
      </section>
    );

};
  
export default Country;
  

