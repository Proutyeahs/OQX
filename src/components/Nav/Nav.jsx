import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
//MUI stuff here
// import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
 import MenuRoundedIcon from '@mui/icons-material/MenuRounded'; //burger menu
 import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'; //back button
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'; //political/legal timeline
 import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'; //business/cultural timeline
 import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined'; //health/science timeline 






function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">OQX</h2>
      </Link>
      
      <Link className="navLink" to="/user">
        <IconButton aria-label="back">
          <ArrowBackOutlinedIcon />
        </IconButton>
      </Link>


      <Link className="navLink" to="/user">
        <IconButton aria-label="political">
          <AccountBalanceOutlinedIcon />
        </IconButton>
      </Link>

      <Link className="navLink" to="/user">
        <IconButton aria-label="health">
          <LocalHospitalOutlinedIcon />
        </IconButton>
      </Link>

      <Link className="navLink" to="/user">
        <IconButton aria-label="business">
          <BusinessOutlinedIcon />
        </IconButton>
      </Link>

      <Link className="navLink" to="/user">
        <IconButton aria-label="menu">
          <MenuRoundedIcon />
        </IconButton>
      </Link>

      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>




            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
