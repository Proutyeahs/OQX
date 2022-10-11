import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
  const history = useHistory();


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

  // gets info for the medicalScientific timeline on click
  const MS = () => {
    dispatch({
      type: 'GET_EVENT',
      payload: 2
    })
    history.push('/medicalScientific')
  }

  // gets info for the businessCultural timeline on click
  const BC = () => {
    dispatch({
      type: 'GET_EVENT',
      payload: 3
    })
    history.push('/businessCultural')
  }

  // gets info for the politicalLegal timeline on click
  const PL = () => {
    dispatch({
      type: 'GET_EVENT',
      payload: 1
    })
    history.push('/politicalLegal')
  }

  return (

    <div className="nav">
      <div>
      </div>

      <Link to="/about">
        <h2 className="nav-title">OQX</h2>
      </Link>

      {/* <Link className="navLink" to="/user">
        <IconButton aria-label="back">
          <ArrowBackOutlinedIcon />
        </IconButton>
      </Link> */}

      {/* changed to dispatch politicalLegal get request on click */}
      <IconButton className="navLink" onClick={PL} aria-label="political">
        <AccountBalanceOutlinedIcon className="political" />
      </IconButton>

      {/* changed to dispatch medicalScientific get request on click */}
      <IconButton className="navLink" onClick={MS} aria-label="medical">
        <LocalHospitalOutlinedIcon className="medical" />
      </IconButton>

      {/* changed to dispatch businessCultural get request on click */}
      <IconButton className="navLink" onClick={BC} aria-label="business">
        <BusinessOutlinedIcon className="business" />
      </IconButton>

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

          {/* ADMIN CONDITIONAL RENDER */}
          {/* IF ADMIN IS LOGGED IN, SHOW THESE LINKS */}
          {user.id && (
            <MenuItem onClick={handleClose}>
              <Link to="/eventForm">
                <ListItem>
                  Create Event
                </ListItem>
              </Link>
            </MenuItem>
          )}

          {user.admin && (
            <MenuItem onClick={handleClose}>
              <Link to="/eventReview">
                <ListItem>
                  Review Events
                </ListItem>
              </Link>
            </MenuItem>
          )}

          {user.admin && (
            <MenuItem onClick={handleClose}>
              <Link to="/userStoriesReview">
                <ListItem>
                  Review Stories
                </ListItem>
              </Link>
            </MenuItem>
          )}
    {/* ADMIN RESOURCE LINKS */}
          {user.id && (
            <MenuItem onClick={handleClose}>
              <Link to="/resourceForm">
                <ListItem>
                  Add Resource
                </ListItem>
              </Link>
            </MenuItem>
          )}

          {user.admin && (
            <MenuItem onClick={handleClose}>
              <Link to="/resourceReview">
                <ListItem>
                  Review Resources
                </ListItem>
              </Link>
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
