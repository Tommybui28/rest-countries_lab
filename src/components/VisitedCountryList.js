

function VisitedCountryList({ visitedCountries }) {
    return (
      <div>
        <h2>Visited Countries</h2>
        <ul>
          {visitedCountries.map(country => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
    );
  }
  
export default VisitedCountryList;