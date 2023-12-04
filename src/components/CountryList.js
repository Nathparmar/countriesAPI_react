import Country from "./Country";

const CountryList = ({countryList}) => {
    
    const displayCountryList = countryList.map((country, index) => (
        <Country key={index} countryName= {country.name.common} />
        ))
    
    return ( 
        <>
        <h2><b>Countries to Visit</b></h2>
        {displayCountryList}
        
        </>
    );
}
 
export default CountryList;