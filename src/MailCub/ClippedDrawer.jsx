import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import brandLogo from "../Asserts/Images/logo.png"
import { Link } from 'react-router-dom';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { logout } from './Logout';
import ChangePasswordForm from './ChangePassword'; 
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { useState } from 'react'; 

const drawerWidth = 240;

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] =useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userEmail = localStorage.getItem('email');

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // handle logout
  const navigate = useNavigate();
  const handleLogout = async () => {
    const success = await logout(navigate);
  };

  // handle password change
  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem('token');
      const success = await ChangePasswordForm({
        oldPassword: oldPassword,
        newPassword: newPassword,
        token: token
      });
      if (success) {
        alert('Password changed successfully!');
        setIsModalOpen(false); 
      } else {
        alert('Failed to change password. Please try again.');
      }
    } catch (error) {
      console.error('Error changing password:', error.response);
      alert('Failed to change password. Please try again.');
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Link to={"./signIn"}><img src={brandLogo} style={{ width: '50%' }} /></Link>
      </Toolbar>
      <Divider />
     
      <List>
        {[
          { menuItem: 'Dashboard', icon: <InboxIcon />, path: '/dashboard' },
          { menuItem: 'Customer', icon: <InboxIcon />, path: '/customer' },
        ].map((text, index) => (
          <ListItem
            key={text.menuItem}
            disablePadding
            sx={{
              '&:hover': {
                '& .MuiListItemIcon-root': {
                  color: '#00A95A',
                },
                '& .MuiListItemText-primary': {
                  color: '#00A95A',
                },
              },
              textDecoration: 'none',
              padding: 'none'
            }}
          >
            <ListItemButton
              component={Link}
              to={text.path}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <AccessAlarmIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.menuItem} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="#00A95A"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="profile-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#adb5bd"
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileMenuClose}
              PaperProps={{
                sx: {
                  '& .MuiMenuItem-root': {
                    '&:hover': {
                      color: '#00A95A', 
                    },
                  },
                },
              }}
            >
              <MenuItem onClick={handleProfileMenuClose}>
                <Typography variant="inherit" noWrap>
                  {userEmail}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleOpenModal}>
                <Typography variant="inherit" noWrap>
                  Change Password
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography variant="inherit" noWrap>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </div>
       
          </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="change-password-modal"
        aria-describedby="change-password-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <ChangePasswordForm
            oldPassword={oldPassword}
            newPassword={newPassword}
            setOldPassword={setOldPassword}
            setNewPassword={setNewPassword}
            setConfirmPassword={setConfirmPassword}
            handleChangePassword={handleChangePassword}
          />
        </Box>
      </Modal>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
