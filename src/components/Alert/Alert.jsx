import { Snackbar, Alert } from '@mui/material';

export const AlertMessage = ({ contactName, isOpen, handleClose }) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={1500}
      onClose={handleClose}
    >
      <Alert severity="error" sx={{ width: '100%' }}>
        {contactName} is already in contacts.
      </Alert>
    </Snackbar>
  );
};
