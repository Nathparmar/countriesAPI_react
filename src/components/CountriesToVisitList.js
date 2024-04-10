import React from 'react'
import Country from './Country';


const CountriesToVisitList = ({countryList, onVisit}) => {

  const displayCountryList = countryList.map((country, index) => (
    <Country
        key={index}
        countryName={country.name.common}
        flag = {country.flag}
        onButtonClick={() => onVisit(country)}
        countryDetails={{
          countryCapital: country.capital,
          countryContinent: country.continents.join(', '),
          countryPopulation: country.population,
          countryLanguages: country.languages,
          countryArea: country.area
        }}
    />
  ));

  return (
    <>
        <h2><b>Countries to Visit</b></h2>
            <ul>{displayCountryList}</ul>
    
    </>
  )
}

export default CountriesToVisitList