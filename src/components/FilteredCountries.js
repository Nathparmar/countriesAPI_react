import React from 'react'
import Country from './Country';

const FilteredCountries = ({filteredCountries}) => {



    const displayFilteredList = filteredCountries.map((filteredCountry, index) => (
        <Country 
            key={index} 
            countryName={filteredCountry.name.common} 
            flag = {filteredCountry.flag}
            countryDetails={{
                countryCapital: filteredCountry.capital,
                countryContinent: filteredCountry.continents,
                countryPopulation: filteredCountry.population,
                countryLanguages: filteredCountry.languages,
                countryArea: filteredCountry.area
            }}
    
        />
    ));

  return (
        <>
            <h2><b>Filtered Countries</b></h2>
            <ul>
                {displayFilteredList}
            </ul>
        </>
    )
}

export default FilteredCountries