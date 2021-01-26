import { useEffect, useState } from 'react';
import './App.css';
import EternalCard from './components/EternalCard';
import SearchCards from './components/SearchCards';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [filterBy, setFilterBy] = useState('Name');
  const [queryText, setQueryText] = useState('torch');

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("./eternal-cards.json")
      .then(result => result.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  const filteredItems = items.filter(eachItem => eachItem[`${filterBy}`].toLowerCase().includes(`${queryText}`));

  if (error) {
    return (
      <>
        {/* <SearchCards /> */}
        <div>Error: {error.message}</div>
      </>
    )
  } else if (!isLoaded) {
    return (
      <>
        {/* <SearchCards /> */}
        <div>Loading...</div>;
      </>
    )
  } else {
    return (
      <>
      <input 
          id="SearchCards"
          type="text"
          aria-label="Search Cards"
          onChange={(event) => setQueryText(event.target.value)}
          value={queryText}
        />
      {/* <SearchCards />   */}
      <ul>
        {filteredItems.map(item => (
          <>
            <EternalCard key={`${item.SetNumber}-${item.EternalID}`} card={item} />
            <hr />
          </>
        ))}
      </ul>
      </>
    );
  }
}

export default App;
