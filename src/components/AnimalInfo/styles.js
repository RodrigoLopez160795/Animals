import styled from '@emotion/styled';

export const Wrapper = styled.div`
  color: black;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  border: 1px solid red;
  background: rgb(101, 131, 48);
  background: linear-gradient(
    90deg,
    rgba(101, 131, 48, 0.7483368347338936) 20%,
    rgba(196, 119, 42, 0.7343312324929971) 69%,
    rgba(208, 171, 21, 0.7287289915966386) 100%
  );
  width: 70vw;
  max-height: 300px;
  overflow-y: scroll;

  & img {
    max-width: 250px;
    max-height: 200px;
  }
`;

export const CloseWrapper = styled.div`
  height: 10%;
  justify-content: flex-end;
  display: flex;
`;

export const InfoWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
