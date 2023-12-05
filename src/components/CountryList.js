import React from 'react';
import Country from './Country';

const CountryList = ({ countryList, visitedCountriesList, onVisit }) => {
  
    const displayCountryList = countryList.map((country, index) => (
    <Country
      key={index}
      countryName={country.name.common}
      flag = {country.flag}
      onButtonClick={() => onVisit(country)}
    />
  ));

  const displayVisitedList = visitedCountriesList.map((visitedCountry, index) => (
    <Country 
        key={index} 
        countryName={visitedCountry.name.common} 
        flag = {visitedCountry.flag}
        visited 
    />
  ));

  return (
    <>
      <h2><b>Countries to Visit</b></h2>
      <ul>{displayCountryList}</ul>
      <hr />
      <h2><b>Visited Countries</b></h2>
      {displayVisitedList}
    </>
  );
};

export default CountryList;
