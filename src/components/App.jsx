import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from "redux/operations";
import { MainContainer, Title } from 'components/App/App.styled';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <Title>Phonebook</Title>
      <ContactForm/>
      <Title>Contacts</Title>
      <Filter />
      <ContactList/>
    </MainContainer>
  );
};

export { App };
