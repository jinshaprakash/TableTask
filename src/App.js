import logo from './logo.svg';

import React, {useState} from 'react';
import HomePage from './HomePage';
import SearchBox from './SearchBox';
import styles from './HomePage.module.css'
const allPlaces = [
  {
    id: 147866,
    wikiDataId: "Q107941",
    type: "ADM2",
    city: "Central Delhi district",
    name: "Central Delhi district",
    country: "India",
    countryCode: "IN",
    region: "Delhi",
    regionCode: "DL",
    latitude: 28.645,
    longitude: 77.245,
    population: 582320
  },
  {
    id: 3311555,
    wikiDataId: "Q5253088",
    type: "CITY",
    city: "Delakhari",
    name: "Delakhari",
    country: "India",
    countryCode: "IN",
    region: "Madhya Pradesh",
    regionCode: "MP",
    latitude: 22.4334,
    longitude: 78.6166,
    population: 0
  },
  {
    id: 3453162,
    wikiDataId: "Q1353",
    type: "CITY",
    city: "Delhi",
    name: "Delhi",
    country: "India",
    countryCode: "IN",
    region: "Delhi",
    regionCode: "DL",
    latitude: 28.666666666,
    longitude: 77.216666666,
    population: 9879172
  },
  {
    id: 3203689,
    wikiDataId: "Q1192604",
    type: "CITY",
    city: "Delhi Cantonment",
    name: "Delhi Cantonment",
    country: "India",
    countryCode: "IN",
    region: "Delhi",
    regionCode: "DL",
    latitude: 28.59025,
    longitude: 77.131919444,
    population: 0
  },
  {
    id: 56192,
    wikiDataId: "Q16999192",
    type: "CITY",
    city: "Delwada",
    name: "Delwada",
    country: "India",
    countryCode: "IN",
    region: "Gujarat",
    regionCode: "GJ",
    latitude: 20.7833,
    longitude: 71.05,
    population: 11912
  }
];
function App() {
  
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = (query) => {
    setQuery(query);
    if (!query.trim()) {
      setFilteredPlaces([]);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = allPlaces.filter(place =>
        place.name.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredPlaces(filtered);
      setLoading(false);
    }, 1000); 
  };
  return (
    <>
      <SearchBox onSearch={handleSearch}/>
      <HomePage places={filteredPlaces} query={query} />
      {loading && <div className={styles.spinner}></div>}
    
    </>
  );
}

export default App;
