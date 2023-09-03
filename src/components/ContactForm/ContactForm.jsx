import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { AlertMessage } from '../Alert/Alert';
import { Box, TextField, IconButton, Button, Dialog, DialogTitle, DialogContent} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      return setOpenAlert(true);
    }
    dispatch(addContact({ id: nanoid(), name, number }));
    handleClose();
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
    <Button variant="outlined" sx={{height:{sm:40}, minWidth:{sm:185}}} onClick={handleClickOpen} startIcon={<AddIcon />}>
        Create contact
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <DialogTitle textAlign='center' sx={{ pb:0, fontSize: 24, fontWeight: 500, textTransform: 'uppercase' }}>New contact</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{pt:0}}>
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt: 2, mb: 2 }
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        fullWidth
        sx={{ display: 'block' }}
        id="name"
        label="Name"
        inputProps={{ inputMode: 'text'}}
        value={name}
        onChange={handleNameChange}
        required
      />
      <TextField
        fullWidth
        sx={{ display: 'block' }}
        id="number"
        label="Number"
        inputProps={{ inputMode: 'tel', pattern: '[0-9]*' }}
        value={number}
        onChange={handleNumberChange}
        required
      />
      <Button fullWidth sx={{p: 2 }} variant="contained" type="submit">
        Add contact
      </Button>
          </Box>
           </DialogContent>
      </Dialog>
      <AlertMessage contactName={name} isOpen={openAlert} handleClose={setOpenAlert}/>
      </>
  );
};

export { ContactForm };
