import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { Container, Typography, Box } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="xl" sx={{ mt: 2, }}>
      <Box sx={{display:{sm:'flex'}, gap:{sm:3}}}>
          <ContactForm />
        <Box sx={{width:{sm:'100%'}, textAlign: 'center', mt:{xs:2, sm:0}}}>
      <Typography variant='h3' sx={{fontSize:{xs:36, sm:48}, mb: 2, textTransform:'uppercase'}}>My contacts</Typography>
      <Filter />
          <ContactList />
          </Box>
        </Box>
    </Container>
  );
}