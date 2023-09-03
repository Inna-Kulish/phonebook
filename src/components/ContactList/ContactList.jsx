import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  getContacts,
  getError,
  getIsLoading,
  getVisibleContacts,
} from 'redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const visibleContacts = useSelector(getVisibleContacts);

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        textTransform: 'capitalize',
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }

  return (
    <List>
      {isLoading && !error ? (
        <b>Request in progress...</b>
      ) : contacts.length === 0 && !error ? (
        <p>Add your first contact.</p>
      ) : (
        visibleContacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar {...stringAvatar(`${name}`)}></Avatar>
            </ListItemAvatar>
            <ListItemText sx={{ textTransform: 'capitalize' }}>
              {name}: {number}
            </ListItemText>
            <IconButton onClick={() => dispatch(deleteContact(id))}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))
      )}
    </List>
  );
};

export { ContactList };
