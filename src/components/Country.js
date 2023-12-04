const Country = ({countryName}) => {
    
    return ( 
        <section>
            <h3>{countryName}</h3>
            <label> Visited ? </label>
            <input 
            type="checkbox" 
            value="countryName" 
            
            />
        </section>
    );
}
 
export default Country;