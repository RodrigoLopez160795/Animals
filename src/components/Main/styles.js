import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: #e9e199ff;
  filter: ${(props) => props.modal && 'brightness(0.5)'};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  height: 100vh;
`;

export const AnimalWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 20px;
  max-width: 95%;
  margin: 0px auto;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const NotFound = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
`;
