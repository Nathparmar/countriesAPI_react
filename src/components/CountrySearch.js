import React from 'react'
import { useState } from 'react';

const CountrySearch = ({onSearch}) => {

    const[searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        console.log(searchTerm);
        event.preventDefault();
        onSearch(searchTerm);
        setSearchTerm(" ");
    };
    
  

  return (
        <form onSubmit={(event) => handleSubmit(event)}>
                <label>
                    Search country
                    <input type="text" value={searchTerm} onChange={(event) => handleSearchChange(event)} />
                </label>
                <input className="btn-default" type="submit" value={"Search"} />
        </form>
    )
}

export default CountrySearch