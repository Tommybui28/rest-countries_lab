

function Country({ country, markAsVisited }) {
    const handleVisitClick = () => {
      markAsVisited(country.cca3);
    };
  
    return (
      <li>
        {country.name.common}
        <button onClick={handleVisitClick}>Mark as Visited</button>
      </li>
    );
  }

export default Country;