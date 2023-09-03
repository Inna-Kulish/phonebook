import * as React from 'react';
import {
  Menu,
  Button,
} from '@mui/material';
import FaceIcon from '@mui/icons-material/FaceRounded';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <Button
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenUserMenu}
        color="inherit"
        sx={{ fontSize: {xs:11, sm:18}, pt: {xs:1, sm:2.5}, pb: {xs:1, sm:2.5}, '&:hover': {backgroundColor:'transparent'}}}
        endIcon={<FaceIcon sx={{ width:{xs:18, sm:28}, height:{xs:18, sm:28} }}/>}
      >
        Welcome, {user.name}
      </Button>
      <Menu
        sx={{ mt: '52px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Button onClick={() => dispatch(logOut())} sx={{pr: 2, pl:2 }}>
          Logout
        </Button>
      </Menu>
    </div>
  );
};
