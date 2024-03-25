import { useState } from 'react';
import Country from '../components/Country';

function CountryContainer({ countries, markAsVisited }) {

    const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelect = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleVisitClick = () => {
    if (selectedCountry) {
      markAsVisited(selectedCountry);
    }

    return (
      <div>
        <h2>All Countries</h2>
        <select>
          <option value="">Select a country</option>
          {countries.map(country => (
            <option key={country.cca3} value={country.cca3}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
export default CountryContainer;