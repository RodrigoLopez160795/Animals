import { CloseWrapper, InfoWrapper, Wrapper } from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';
function AnimalInfo({ handler, values }) {
  return (
    <Wrapper>
      <CloseWrapper>
        <AiFillCloseCircle
          size='1.5rem'
          onClick={() =>
            handler((values) => ({
              ...values,
              state: false,
            }))
          }
        />
      </CloseWrapper>
      <InfoWrapper>
        <h3>{values.name}</h3>
        <h4>{values.value}</h4>
        {values.type === 'info' ? (
          <p>
            {values.info}
            {values.value === 'Altura' && 'm'}
          </p>
        ) : (
          <img src={values.info} alt={values.name} />
        )}
      </InfoWrapper>
    </Wrapper>
  );
}

export default AnimalInfo;
