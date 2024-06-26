import { useState } from "react";


const Country = ({ countryName, flag, onButtonClick, visited, countryDetails }) => {
    
  const [showDetails, setShowDetails] = useState(false);
  
  const displayinfo = () => {
    setShowDetails(!showDetails)
  };

  const getLanguages = (languages) => {

    if (!languages || typeof languages !== "object") {
      return null;
  }

    // Convert the languages object into an array of language names
    const languageNames = Object.values(languages);
    return languageNames.join(', '); // Join language names with comma
  };
  
  
  return (
      <section className="country-section">
        <div className="countryname-flag-div">
          <h3 className="country-name">{countryName}</h3>
          <h3 className="country-flag">{flag}</h3>
        </div>
        <div className="btns">
        <button className="visit-btn" onClick={onButtonClick}>{visited ? 'Visited' : 'Visit?'}</button>
        <button className="info-btn"  onClick={displayinfo}>{showDetails ? 'Less Info' : 'More Info'} </button>
        </div>
        {showDetails && (
        <div>
          <h4>Country Details:</h4>
          <p>Capital: {countryDetails.countryCapital}</p>
          <p>Continent: {countryDetails.countryContinent}</p>
          <p>Population: {countryDetails.countryPopulation}</p>
          <p>Languages: {getLanguages(countryDetails.countryLanguages)}</p>
          <p>Area: {countryDetails.countryArea} square km</p>
        </div>
      )}
  
      </section>
    );

};
  
export default Country;
  

