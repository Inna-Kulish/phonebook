import styled from 'styled-components';

const FilterLabel = styled.label`
display: block;
margin-bottom: 15px;

font-size: 14px;
  line-height: calc(16 / 12);
  letter-spacing: 0.04em;
`

const FilterInput = styled.input`
display: block;
  width: 534px;
  margin-top: 4px;
  padding: 11px 32px;

  font-size: 12px;
  line-height: calc(16 / 12);
  letter-spacing: 0.04em;
  border: 1px solid rgba(242, 101, 203, 0.40);
  border-radius: 4px;
`

export { FilterLabel, FilterInput }