import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  getContacts,
  getError,
  getIsLoading,
  getVisibleContacts,
} from 'redux/selectors';
import { List, Item, ContactItem, DeleteBtn } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <List>
      {isLoading && !error ? (
        <b>Request in progress...</b>
      ) : contacts.length === 0 && !error ? (
        <p>Add your first contact.</p>
      ) : (
        visibleContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <ContactItem>
              {name}: {number}
            </ContactItem>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </DeleteBtn>
          </Item>
        ))
      )}
    </List>
  );
};

export { ContactList };
