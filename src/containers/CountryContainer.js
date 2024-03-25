
import Country from '../components/Country';

function CountryContainer({ countries, markAsVisited, selectedCountry, handleCountrySelect }) {

    // sort list alphabetically for my own santiy
    const sortedCountries = countries.slice().sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });
    const handleSelectChange = (event) => {
      handleCountrySelect(event.target.value);
    };
  
    return (
      <div>
        <h2>All Countries</h2>
        <select value={selectedCountry} onChange={handleSelectChange}>
          <option value="">Select a country</option>
          {sortedCountries.map(country => (
            <option key={country.cca3} value={country.cca3}>
              {country.name.common}
            </option>
          ))}
        </select>
        <ul>
          {sortedCountries.map(country => (
            <Country key={country.cca3} country={country} markAsVisited={markAsVisited} />
          ))}
        </ul>
      </div>
    );
  }
  
export default CountryContainer;