import React from 'react';
import Country from './Country';

const CountryList = ({ countryList, visitedCountriesList, onVisit }) => {
  
    
    
    
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
            countryLanguages: country.languages
        }}


        />
    ));

    const displayVisitedList = visitedCountriesList.map((visitedCountry, index) => (
        <Country 
            key={index} 
            countryName={visitedCountry.name.common} 
            flag = {visitedCountry.flag}
            visited 
            countryDetails={{
                countryCapital: visitedCountry.capital,
                countryContinent: visitedCountry.continents.join(', '),
                countryPopulation: visitedCountry.population,
                countryLanguages: visitedCountry.languages
            }}
    
        />
    ));

    // const displayinfo = countryList.map((selectedCountry, index) => {
    //    return selectedCountry.capital;
    // });

    return (
        <>
            <h2><b>Countries to Visit</b></h2>
                <ul>{displayCountryList}</ul>
            <hr />
                <h2><b>Visited Countries</b></h2>
            <ul>{displayVisitedList}</ul>
            
        </>
    );
};

export default CountryList;
