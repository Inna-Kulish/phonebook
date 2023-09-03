import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt: 2, mb: 2 }, width:{xs:'auto', sm: 1/2, lg: 1/3}, mr: 'auto', ml:'auto'
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        fullWidth
        sx={{ display: 'block' }}
        id="email"
        label="Email"
        type="email"
        inputProps={{ inputMode: 'email' }}
        required
      />
      <TextField
        fullWidth
        sx={{ display: 'block' }}
        id="password"
        label="Password"
        type="password"
        required
      />
      <Button fullWidth sx={{display: 'block', p: 2 }} variant="contained" type="submit">
        Log In
      </Button>
    </Box>
  );
};