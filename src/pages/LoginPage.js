import React, { useState } from 'react';
import '../css/Login.css';
import useNavigation from '../hooks/use-navigation';
import useBackend from '../hooks/use-backend';
import LoginContent from '../components/LoginPage/LoginContent';
import {URL} from '../App';

function Login() {
  const { makeRequest } = useBackend();
  const { navigate } = useNavigation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  async function submit(e) {
    e.preventDefault();

    const { email, password } = formData;

    makeRequest(
      'post',
      `${URL}/api/v1/users/login`,
      'Successfully Logedin',
      {
        email,
        password,
      },
      {},
      () => {
        navigate('/');
      }
    );
  }

  return (
    <>
      <div className="login-landing">
        <div className="container">
          <LoginContent
            formData={formData}
            setFormData={setFormData}
            submit={submit}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
