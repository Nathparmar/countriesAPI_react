

const Country = ({ countryName, onButtonClick, visited }) => {
    return (
      <section>
        <h3>{countryName}</h3>
        <button onClick={onButtonClick}>{visited ? 'Visited' : 'Visit?'}</button>
      </section>
    );
  };
  
  export default Country;
  

