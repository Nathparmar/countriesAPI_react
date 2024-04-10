import React, { useState } from 'react';

const ContinentsFilter = ({countryList, visitedCountriesList}) => {
  const [selectedContinents, setSelectedContinents] = useState([]);

  

  const handleCheckboxChange = (continent) => {
    
    const countriesWithContinents = countryList.filter((country) => {
        return country.continent.toLowerCase().includes(continent)
     
    });
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={selectedContinents.includes('Europe')}
          onChange={() => handleCheckboxChange('Europe')}
        />
        Europe
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedContinents.includes('Africa')}
          onChange={() => handleCheckboxChange('Africa')}
        />
        Africa
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedContinents.includes('Asia')}
          onChange={() => handleCheckboxChange('Asia')}
        />
        Asia
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedContinents.includes('Oceania')}
          onChange={() => handleCheckboxChange('Oceania')}
        />
        Oceania
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedContinents.includes('North America')}
          onChange={() => handleCheckboxChange('North America')}
        />
        North America
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedContinents.includes('South America')}
          onChange={() => handleCheckboxChange('South America')}
        />
        South America
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedContinents.includes('Antarctica')}
          onChange={() => handleCheckboxChange('Antarctica')}
        />
        Antarctica
      </label>
    </>
  );
};

export default ContinentsFilter;
