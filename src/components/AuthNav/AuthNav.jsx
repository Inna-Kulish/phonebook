import { NavLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box component="div" sx={{ display: 'flex', gap: 2 }}>
      <Link component={NavLink} to="/register" sx={{ fontSize: {xs:12, sm:18}, fontWeight: 500, textTransform: 'uppercase', textDecoration: 'none' }} color="inherit">
        Register
      </Link>
      <Link component={NavLink} to="/login" sx={{ fontSize: {xs:12, sm:18}, fontWeight: 500, textTransform: 'uppercase', textDecoration: 'none' }} color="inherit">
        Log In
      </Link>
    </Box>
  );
};