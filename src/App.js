import './App.css';
import { useState, useEffect } from 'react';
import CountryContainer from './containers/CountryContainer';
import VisitedCountryList from './components/VisitedCountryList';

function App() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Set initial state with fetched country data
        setCountries(data);
      })
  }, []);

  const markAsVisited = (countryCode) => {
    // Find the country in the countries list
    const country = countries.find(country => country.cca3 === countryCode);
    if (country) {
      // Add the country to the visited countries list
      setVisitedCountries(visitedCountries => [...visitedCountries, country]);
    }
  };

  // dropdown menu
  const handleCountrySelect = (countryCode) => {
    setSelectedCountry(countryCode);
  };

  return (
    <div>
      <h1>Country Bucket List</h1>
      <VisitedCountryList visitedCountries={visitedCountries} />
      <CountryContainer
        countries={countries}
        markAsVisited={markAsVisited}
        selectedCountry={selectedCountry}
        handleCountrySelect={handleCountrySelect}
      />
    </div>
  );
}

export default App;
