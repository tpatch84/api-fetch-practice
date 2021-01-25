import { useEffect, useState } from 'react';
import './App.css';
import EternalCard from './components/EternalCard';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("./eternal-cards.json")
      .then(res => res.json())
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
  }, [])

  const filteredItems = items.filter(eachItem => eachItem['Name'].toLowerCase().includes('torch'));

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {filteredItems.map(item => (
          <>
            <EternalCard key={`${item.SetNumber}-${item.EternalID}`} card={item} />
            <hr />
          </>
        ))}
      </ul>
    );
  }
}

export default App;
