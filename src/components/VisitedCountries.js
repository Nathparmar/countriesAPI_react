import React from 'react'
import Country from './Country';

const VisitedCountries = ({visitedCountriesList}) => {



    const displayVisitedList = visitedCountriesList.map((visitedCountry, index) => (
        <Country 
            key={index} 
            countryName={visitedCountry.name.common} 
            flag = {visitedCountry.flag}
            visited 
            countryDetails={{
                countryCapital: visitedCountry.capital,
                countryContinent: visitedCountry.continents,
                countryPopulation: visitedCountry.population,
                countryLanguages: visitedCountry.languages,
                countryArea: visitedCountry.area
            }}
    
        />
    ));

  return (
    <section className='countries-to-visit-section'>
        <h2 className='countries-to-visit-title'><b>Visited Countries</b></h2>
            {visitedCountriesList.length === 0 ? (
                <h3>You haven't been to any countries yet...</h3>
            ) : (
                <ul>{displayVisitedList}</ul>
            )}
       
    
    </section>
  )
}

export default VisitedCountries