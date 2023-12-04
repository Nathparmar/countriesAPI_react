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

    

    
    return ( 
        <>
            <h1>My Bucket List</h1>
            <h2>Countries to Visit</h2>
            {countryList ? (
            countryList.map((country, index) => (
        <p key={index}>{country.name.common}</p>
            ))
            ) : (
                    <p>Loading country data...</p>
            )}
        </>
    );
}
 
export default CountryListContainer;