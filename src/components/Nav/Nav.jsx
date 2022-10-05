import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';
import { useSelector } from 'react-redux';


//for logout link in burger
import { useDispatch } from 'react-redux';

//MUI ICONS HERE
import { IconButton } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'; //back button

//TIMELINE ICONS
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'; //political/legal timeline
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'; //business/cultural timeline
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined'; //health/science timeline 

//MUI MENU PIECES
import Menu from '@mui/material/Menu'; //burger menu box/functionality
import MenuItem from '@mui/material/MenuItem'; //each line on the menu
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'; //burger menu icon
import ListItem from '@mui/material/ListItem';


function Nav() {
  //is the user logged in? who are they?
  const user = useSelector((store) => store.user);

  //used to log out
  const dispatch = useDispatch();


  //MENU THINGS----------------------------------------
  //declares anchor as boolean value
  const [anchorEl, setAnchorEl] = React.useState(null);
  //switch to open/close menu
  const open = Boolean(anchorEl);
  //opens menu where the user clicked (event.currentTarget)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //closes menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  //---------------------------------------------------






  return (
    
    
    <div className="nav">
      <div>
      </div>

      <Link to="/home">
        <h2 className="nav-title">OQX</h2>
      </Link>

      {/* <Link className="navLink" to="/user">
        <IconButton aria-label="back">
          <ArrowBackOutlinedIcon />
        </IconButton>
      </Link> */}


      <Link className="navLink" to="/politicalLegal">
        <IconButton aria-label="political">
          <AccountBalanceOutlinedIcon className ="political"/>
        </IconButton>
      </Link>

      <Link className="navLink" to="/medicalScientific">
        <IconButton aria-label="medical">
          <LocalHospitalOutlinedIcon className="medical"/>
        </IconButton>
      </Link>

      <Link className="navLink" to="/businessCultural">
        <IconButton aria-label="business">
          <BusinessOutlinedIcon className="business"/>
        </IconButton>
      </Link>



      <div>
        {/* THIS DIV IS MENU STUFF */}
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <MenuRoundedIcon />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}>

          <MenuItem onClick={handleClose}>
            <Link to="/about">
              <ListItem>
                About
              </ListItem>
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to="/sponsors">
              <ListItem>
                Sponsors
              </ListItem>
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to="/resources">
              <ListItem>
                Resources
              </ListItem>
            </Link>
          </MenuItem>

          {/* If no user is logged in, show these links */}
          {!user.id && (
            // If there's no user, show login/registration links
            <MenuItem onClick={handleClose}>
              <Link to="/login">
                <ListItem>
                  Login / Register
                </ListItem>
              </Link>
            </MenuItem>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <MenuItem
              onClick={() => dispatch({ type: 'LOGOUT' })}>
              <ListItem>
                Log Out
              </ListItem>
            </MenuItem>
          )}

        </Menu>
      </div>

      <div>
      </div>

    </div>
  );
}

export default Nav;
