import React, { useState } from 'react';
import axios from 'axios';
import '../css/Login.css';
import useNavigation from '../hooks/use-navigation';
import useBackend from '../hooks/use-backend';
import SignupContent from '../components/SignupPage/SignupContent';

function Signup() {
  const { makeRequest } = useBackend();
  const { navigate } = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  async function submit(e) {
    const { name, email, password, passwordConfirm } = formData;
    
    e.preventDefault();

    makeRequest(
      'post',
      'http://127.0.0.1:5000/api/v1/users/signup',
      'Created Successfully',
      {
        name,
        email,
        password,
        passwordConfirm,
      },
      {},
      () => navigate('/')
    );
  }

  return (
    <div className="signup-landing">
      <div className="container">
        <SignupContent
          formData={formData}
          setFormData={setFormData}
          submit={submit}
        />
      </div>
    </div>
  );
}

export default Signup;
