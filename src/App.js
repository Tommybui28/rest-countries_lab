import './App.css';
import { useState, useEffect } from 'react';
import CountryContainer from './containers/CountryContainer';
import VisitedCountryList from './components/VisitedCountryList';

function App() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {


        // Set initial state with fetched country data
        setCountries(data);
      })
  }, []);

  return (
    <div>
      <h1>Country Bucket List</h1>
      <VisitedCountryList visitedCountries={visitedCountries} />
      <CountryContainer countries={countries} markAsVisited={markAsVisited} />
    </div>
  );
}

export default App;
