import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid #000;
  border-radius: 3px;
  padding: 15px;
  width: 250px;
  background-color: #f1f5c4;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 700;
`;

export const FormBtn = styled.button`
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #c6f5c4;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #a2e4e0;
    color: #f2a3f4;
  }
`;

export const Input = styled.input`
  background-color: #a3e4e0;
  cursor: pointer;
`;
