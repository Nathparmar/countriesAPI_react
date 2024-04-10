import React, { useState, useEffect } from 'react';
import CountrySearch from '../components/CountrySearch';
import ContinentsFilter from '../components/ContinentsFilter';
import CountriesToVisitList from '../components/CountriesToVisitList';
import VisitedCountries from '../components/VisitedCountries';
import FilteredCountries from '../components/FilteredCountries';

const CountryListContainer = () => {
  
    const [countryList, setCountryList] = useState([]);
    const [visitedCountriesList, setVisitedCountriesList] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [hasSearched, setHasSearched] = useState(false)
    


    const loadCountryData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountryList(data);
        setFilteredCountries(data);
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

    const handleSearch = (searchTerm) => {
      const filteredCountries = countryList.filter((country) => {
         return country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      
      });

      const filteredVisitedCountries = visitedCountriesList.filter((country) => {
        return country.name.common.toLowerCase().includes(searchTerm.toLowerCase())

      })
          
      setCountryList(filteredCountries);
      setVisitedCountriesList(filteredVisitedCountries)
      // setFilteredCountries(filteredCountries)
      // setHasSearched(true)

     
    }

    


      
    return (
      <>
        <h1>My Bucket List</h1>
        <section className="searchForm">
            <CountrySearch onSearch={handleSearch} />
            <ContinentsFilter countryList={countryList} visitedCountriesList={visitedCountriesList}/>
        </section>
        {!hasSearched ? (
            <>
            <CountriesToVisitList countryList={countryList} onVisit={handleVisitedCountries} />
            <hr />
            <VisitedCountries visitedCountriesList={visitedCountriesList} />
            </>
        ) : (
            <>
           <FilteredCountries filteredCountries={filteredCountries} 
            hasSearched={hasSearched}/>
            </>
        )}
      </>
    );
  
};

export default CountryListContainer;
