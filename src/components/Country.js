

const Country = ({ countryName, flag, onButtonClick, visited }) => {
    return (
      <section>
        <h3>{countryName} {flag}</h3>
        <button onClick={onButtonClick}>{visited ? 'Visited' : 'Visit?'}</button>
      </section>
    );
  };
  
  export default Country;
  

