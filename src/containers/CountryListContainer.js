import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';

const CountryListContainer = () => {
  const [countryList, setCountryList] = useState([]);
  const [visitedCountriesList, setVisitedCountriesList] = useState([]);

  const loadCountryData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountryList(data);
    } catch (error) {
      console.error('Error loading country data:', error);
    }
  };

  useEffect(() => {

    loadCountryData();

  }, []);

  const handleVisitedCountries = (visitedCountry) => {
    // Remove country from CountryList
    const updatedCountryList = countryList.filter(
      (country) => country !== visitedCountry
    );

    // Add the visited country to the list of visited countries
    setVisitedCountriesList((visited) => [...visited, visitedCountry]);

    // Update 
    setCountryList(updatedCountryList);
  };

  return (
    <>
      <h1>My Bucket List</h1>

      <CountryList
        countryList={countryList}
        visitedCountriesList={visitedCountriesList}
        onVisit={handleVisitedCountries}
      />
    </>
  );
  
};

export default CountryListContainer;
