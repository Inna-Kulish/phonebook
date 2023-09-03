import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Link, Toolbar } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Toolbar component="nav" sx={{ flexGrow: 1, gap: 2, p:0 }}>
      <Link component={NavLink} to="/" sx={{ fontSize: {xs:12, sm:18}, fontWeight: 500, textTransform: 'uppercase', textDecoration: 'none', pt:3, pb:3 }} color="inherit">
        Home
      </Link>
      {isLoggedIn && (
        <Link component={NavLink} to="/contacts" sx={{ fontSize: {xs:12, sm:18}, fontWeight: 500, textTransform: 'uppercase', textDecoration: 'none', pt:3, pb:3 }} color="inherit">
        Contacts
      </Link>
      )}
    </Toolbar>
  );
};
