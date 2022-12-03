import styled from '@emotion/styled';

export const Wrapper = styled.form`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
`;

export const InputWrapper = styled.div`
  background-color: #bed084ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  & button {
    background-color: inherit;
    border: none;
  }

  & input {
    border: none;
    background-color: inherit;
    color: white;
    outline: none;
  }

  & input::placeholder {
    color: white;
  }

  & input:focus {
    border: none;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #096103;
  border: 1px solid #8fc202;
  padding: 0.2rem;
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;
