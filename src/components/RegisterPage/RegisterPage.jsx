import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
//MUI BUTTON
import Button from '@mui/material/Button';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />
      <center>
        <Button variant='(default)'
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
