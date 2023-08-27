import styled from 'styled-components';

const List = styled.ul`
text-align: left;
`

const Item = styled.li`
display: flex;
padding-left: 10px;
justify-content: space-between;
border: 1px solid rgba(33, 33, 33, 0.2);

&:not(:last-child) {
    margin-bottom: 10px;
  }
`

const ContactItem = styled.p`
min-width: 280px;

font-size: 16px;
text-transform: capitalize;
  line-height: 1.8;
  letter-spacing: 0.04em;
`

const DeleteBtn = styled.button`
 padding: 4px 8px;

  font-size: 12px;
  line-height: calc(16 / 12);
  letter-spacing: 0.04em;
  border: 1px solid transparent;
  color: white;
  background-color: red;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus {
    color: red;
    background-color: transparent;
  }
`

export { List, Item, ContactItem, DeleteBtn }