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
    code: '',
    password: '',
    passwordConfirm: '',
  });
  const [focusedFields, setFocusedFields] = useState({
    code: false,
    password: false,
    passwordConfirm: false,
  });

  const onChange = handleChange(setFormData);
  const onFocus = handleFocus(setFocusedFields);
  const onBlur = handleBlur(setFocusedFields);

  const submitCode = (e) => {
    e.preventDefault();

    const { code, password, passwordConfirm } = formData;

    makeRequest(
      'patch',
      `http://127.0.0.1:5000/api/v1/users/resetPassword/${code}`,
      'The Password Changed Successfully',
      { password, passwordConfirm },
      {},
      () => {
        navigate('/login');
      }
    );
  };

  const formFields = [
    {
      inputType: 'textField',
      title: 'code',
      type: 'text',
      className: focusedFields.code ? 'focused' : '',
      autoComplete: 'new-password',
      embeddedProps: {
        value: formData.code,
        onChange,
        onFocus,
        onBlur,
      },
    },
    {
      inputType: 'textField',
      title: 'password',
      type: 'password',
      className: focusedFields.password ? 'focused' : '',
      autoComplete: 'new-password',
      embeddedProps: {
        value: formData.password,
        onChange,
        onFocus,
        onBlur,
      },
    },
    {
      inputType: 'textField',
      title: 'password-confirm',
      type: 'password',
      autoComplete: 'new-password',
      name: 'passwordConfirm',
      className: focusedFields.passwordConfirm ? 'focused' : '',
      embeddedProps: {
        value: formData.passwordConfirm,
        onChange,
        onFocus,
        onBlur,
      },
    },
  ];

  return (
    <div className="reset-box">
      <h1>Find Your Account</h1>

      <form action="" method="post">
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
          <input type="submit" onClick={submitCode}></input>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
