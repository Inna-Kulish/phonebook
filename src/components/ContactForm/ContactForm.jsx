import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Phonebook, Label, Input, AddButton } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleNameChange = evt => {
    setName(evt.target.value);
  };

  const handleNumberChange = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
                
    if (contactName) {
      return alert(`${name} is already is contacts.`);
    }
    dispatch(addContact({ id: nanoid(), name, number }));
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <Phonebook onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </Phonebook>
  );
};

export { ContactForm };
