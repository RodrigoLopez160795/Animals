import { useRef, useState } from 'react';
import { BsSearch, BsArrowReturnLeft } from 'react-icons/bs';
import { Button, InputWrapper, Wrapper } from './styles';

function Navbar({ handler, handleClick }) {
  const query = useRef(null);
  const [reset, setReset] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    handler(query.current.value);
    query.current.value = '';
  }

  function handleButtonAnimals(type) {
    switch (type) {
      case 'hide':
        setReset(false);
        return;
      case 'show':
        if (query.current.value !== '') setReset(true);
        return;
      default:
        return;
    }
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <input placeholder='Buscar' ref={query} />
        <button type='submit' onClick={() => handleButtonAnimals('show')}>
          <BsSearch color='white' />
        </button>
      </InputWrapper>
      {reset && (
        <Button
          onClick={() => {
            handleClick();
            handleButtonAnimals('hide');
          }}
        >
          <BsArrowReturnLeft color='white' size='1.5rem' />
        </Button>
      )}
    </Wrapper>
  );
}

export default Navbar;
