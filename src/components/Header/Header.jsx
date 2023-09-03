import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppBar, Toolbar } from '@mui/material';

export const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar component="header" position="static">
      <Toolbar>
      <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
    </AppBar>
  );
};