import './App.css';
import React, { useState, useEffect } from 'react';
import CountryContainer from './containers/CountryContainer';
import VisitedCountryList from './components/VisitedCountryList';

function App() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  
  return (
    <div>
      <h1>Country Bucket List</h1>
      <VisitedCountryList visitedCountries={visitedCountries} />
      <CountryContainer countries={countries} markAsVisited={markAsVisited} />
    </div>
  );
}

export default App;
