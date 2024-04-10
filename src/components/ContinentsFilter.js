import React from 'react'

const ContinentsFilter = () => {
  return (
    <>
    <label>
      <input
        type="checkbox"
        // checked={selectedContinents.includes('Europe')}
        // onChange={() => handleCheckboxChange('Europe')}
      />
      Europe
    </label>
    <label>
      <input
        type="checkbox"
        // checked={selectedContinents.includes('Africa')}
        // onChange={() => handleCheckboxChange('Africa')}
      />
      Africa
    </label>
    <label>
      <input
        type="checkbox"
        // checked={selectedContinents.includes('Asia')}
        // onChange={() => handleCheckboxChange('Asia')}
      />
      Asia
    </label>
    <label>
      <input
        type="checkbox"
        // checked={selectedContinents.includes('Oceania')}
        // onChange={() => handleCheckboxChange('Oceania')}
      />
      Oceania
    </label>
    <label>
      <input
        type="checkbox"
        // checked={selectedContinents.includes('Oceania')}
        // onChange={() => handleCheckboxChange('Oceania')}
      />
      North America
    </label>
    <label>
      <input
        type="checkbox"
        // checked={selectedContinents.includes('Oceania')}
        // onChange={() => handleCheckboxChange('Oceania')}
      />
      South America
    </label>
    <label>
      <input
        type="checkbox"
        // checked={selectedContinents.includes('Oceania')}
        // onChange={() => handleCheckboxChange('Oceania')}
      />
      Antarctica
    </label>
  </>
    )
}

export default ContinentsFilter