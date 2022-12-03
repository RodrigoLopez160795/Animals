import styled from '@emotion/styled';

export const Wrapper = styled.div`
  -webkit-box-shadow: 7px 9px 9px 6px rgba(0, 0, 0, 0.68);
  box-shadow: 7px 9px 9px 6px rgba(0, 0, 0, 0.68);
  border: 5px solid #978a8c;
  border-radius: 0px 40px 0px 40px;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  height: 250px;

  & img {
    border-radius: 0.5rem;
    width: 100%;
    height: 50%;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
