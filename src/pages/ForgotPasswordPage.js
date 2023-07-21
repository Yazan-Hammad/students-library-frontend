import React, { useState } from 'react';
import '../css/ResetPasswordPage.css';
import useBackend from '../hooks/use-backend';
import useNavigation from '../hooks/use-navigation';
import {
  handleFocus,
  handleBlur,
  handleChange,
} from '../components/Form/formHelpers';
import DynamicForm from '../components/Form/DynamicForm';

function ResetPasswordPage() {
  const { makeRequest } = useBackend();
  const { navigate } = useNavigation();

  const [formData, setFormData] = useState({
    email: '',
  });
  const [focusedFields, setFocusedFields] = useState({
    email: false,
  });

  const onChange = handleChange(setFormData);
  const onFocus = handleFocus(setFocusedFields);
  const onBlur = handleBlur(setFocusedFields);

  const formFields = [
    {
      inputType: 'textField',
      title: 'email',
      type: 'email',
      className: focusedFields.email ? 'focused' : '',
      embeddedProps: {
        value: formData.email,
        onChange,
        onFocus,
        onBlur,
      },
    },
  ];

  const submitEmail = (e) => {
    e.preventDefault();

    const {email} = formData;

    makeRequest(
      'post',
      'http://127.0.0.1:5000/api/v1/users/forgotPassword',
      "We'll send you a code to your email",
      { email },
      {},
      () => {
        navigate('/resetpassword');
      }
    );
  };

  return (
    <div className="reset-box">
      <h1>Find Your Account</h1>
      <form action="" method="post">
        <p>Please enter your email to search for your account.</p>
        <DynamicForm formFields={formFields} />
        <div className="buttons">
          <button
            id="cancel"
            onClick={() => {
              navigate('/login');
            }}
          >
            Cancel
          </button>
          <input type="submit" onClick={submitEmail}></input>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
