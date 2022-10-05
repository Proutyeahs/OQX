import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

//MUI INPUT AND BUTTON
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  const handleClick = () => {
    console.log('HANDLE CLICK');
    history.push('/medicalScientific')
  }
  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          <TextField variant="standard"
            type="text"
            name="username"
            label="Username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <TextField variant="standard"
            type="password"
            name="password"
            label="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <br></br>
        <input 
        className="btn" 
        type="submit" 
        name="submit" 
        value="Log In" />
        {/* <button className="btn" type="submit" name="submit" value="Log In" onClick={handleClick}>TEST</button> */}
      </div>
    </form>
  );
}

export default LoginForm;
