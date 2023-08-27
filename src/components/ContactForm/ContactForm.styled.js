import styled from 'styled-components';

const Phonebook = styled.form`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  text-align: left;
  font-size: 12px;
  line-height: calc(16 / 12);
  letter-spacing: 0.04em;
`;

const Input = styled.input`
  display: block;
  width: 150px;
  margin-top: 4px;
  padding: 11px 38px;

  font-size: 12px;
  line-height: calc(16 / 12);
  letter-spacing: 0.04em;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
`;

const AddButton = styled.button`
  padding: 10px 12px;
  margin-top: auto;
  height: 39px;
  font-size: 12px;
  line-height: calc(16 / 12);
  letter-spacing: 0.04em;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  background-color: #f3f3f3;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus {
    color: white;
    background-color: #C4C4C4;
  }
`;

export { Phonebook, Label, Input, AddButton };
