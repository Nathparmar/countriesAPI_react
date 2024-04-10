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
    <section className='countries-to-visit-section'>
      <h2 className='countries-to-visit-title'><b>Countries to Visit</b></h2>
      <ul>{displayCountryList}</ul>
    
    </section>
  )
}

export default CountriesToVisitList