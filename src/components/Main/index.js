import { useEffect, useState } from 'react';
import { caseSensitive } from '../../utils';
import AnimalCard from '../AnimalCard';
import AnimalInfo from '../AnimalInfo';
import Navbar from '../Navbar';
import { AnimalWrapper, NotFound, Wrapper } from './styles';
import { RiEmotionSadLine } from 'react-icons/ri';

function Main({ animals }) {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(true);
  const [filter, setFilter] = useState(animals);
  const [results, setResults] = useState('');
  const [reset, setReset] = useState(false);
  const [modal, setModal] = useState({
    state: false,
    info: '',
    name: '',
    type: '',
    value: '',
  });
  useEffect(() => {
    if (query.length > 0) {
      const data = animals.filter((a) =>
        caseSensitive(a.name).includes(caseSensitive(query))
      );
      if (data.length > 0) {
        setResults(data.length);
        setReset(false);
        setSearch(true);
        setFilter(data);
      } else if (data.length === 0) setSearch(false);
      setQuery('');
    }
  }, [query]);

  function handleReset() {
    setReset(true);
    setFilter(animals);
    setSearch(true);
  }
  return (
    <>
      <Wrapper modal={modal.state}>
        <Navbar handler={setQuery} handleClick={handleReset} />
        {results !== '' && !reset && <p>Encontre {results} resultados</p>}
        {search ? (
          <AnimalWrapper>
            {filter.map((a) => (
              <AnimalCard animal={a} key={a.id} modalHandler={setModal} />
            ))}
          </AnimalWrapper>
        ) : (
          <NotFound>
            <h1>No hay animales con ese nombre</h1>
            <RiEmotionSadLine size='3rem' />
          </NotFound>
        )}
      </Wrapper>
      {modal.state && <AnimalInfo handler={setModal} values={modal} />}
    </>
  );
}

export default Main;
