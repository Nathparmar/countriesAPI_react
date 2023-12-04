import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';

const CountryListContainer = () => {

    const [CountryList, setCountryList] = useState(null)

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
            
        </>
    );
}
 
export default CountryListContainer;