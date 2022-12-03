import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Main from './components/Main';
import db from './firebase/firebaseConfig';
import Loader from './components/Loader';

function App() {
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (function getData() {
      getDocs(collection(db, 'animals')).then(({ docs }) => {
        setAnimals([...docs].reduce((acc, cv) => [...acc, cv.data()], animals));
      });
    })();
  }, []);

  useEffect(() => {
    if (animals.length === 0) {
      setIsLoading(true);
    } else setIsLoading(false);
  }, [animals]);

  return <div>{isLoading ? <Loader /> : <Main animals={animals} />}</div>;
}

export default App;
