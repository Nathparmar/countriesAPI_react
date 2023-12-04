import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import Country from '../components/Country';

const CountryListContainer = () => {

    const [countryList, setCountryList] = useState(null)

    const loadCountryData = async() => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();
        setCountryList(data);
    }

    
    useEffect( () => {
        loadCountryData();
    }, [])

    const [visitedCountriesList, setVisitedCountryList] = useState(null)
    
    const addVisitedCountries = (visitedCountriesName) => {
        
        
        const updateCountriesList = [...visitedCountriesList];
        updateCountriesList.push(visitedCountriesName);
       
    
        //set countryList using array
        setVisitedCountryList(updateCountriesList);
        


        // add country to VisitedList


    }
    

    
    return ( 
        <>
            <h1>My Bucket List</h1>
            
            
            {countryList ? <CountryList countryList={countryList}/>
             : <p>Loading country data...</p>
            }
           
            
            


            
        </>
    );
}
 
export default CountryListContainer;