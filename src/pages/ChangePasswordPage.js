import React, { useState } from 'react';
import '../css/ResetPasswordPage.css';
import useBackend from '../hooks/use-backend';
import useNavigation from '../hooks/use-navigation';
import {
  handleBlur,
  handleChange,
  handleFocus,
} from '../components/Form/formHelpers';
import DynamicForm from '../components/Form/DynamicForm';

function ChangePasswordPage({ formData, setFormData, setOpenForm }) {
  const { token, makeRequest } = useBackend();
  const { navigate } = useNavigation();

  const [focusedFields, setFocusedFields] = useState({
    passwordCurrent: false,
    password: false,
    passwordConfirm: false,
  });

  const embeddedFunctions = {
    onChange: handleChange(setFormData),
    onFocus: handleFocus(setFocusedFields),
    onBlur: handleBlur(setFocusedFields),
  };

  const formFields = [
    {
      inputType: 'textField',
      name: 'passwordCurrent',
      title: 'Password Current',
      className: focusedFields.passwordCurrent ? 'focused' : '',
      embeddedProps: {
        value: formData.passwordCurrent,
        ...embeddedFunctions,
      },
    },
    {
      inputType: 'textField',
      name: 'password',
      type: 'password',
      title: 'Password',
      className: focusedFields.password ? 'focused' : '',
      embeddedProps: {
        value: formData.password,
        ...embeddedFunctions,
      },
    },
    {
      inputType: 'textField',
      name: 'passwordConfirm',
      type: 'password',
      title: 'Password Confirm',
      className: focusedFields.passwordConfirm ? 'focused' : '',
      embeddedProps: {
        value: formData.passwordConfirm,
        ...embeddedFunctions,
      },
    },
  ];

  const submitCode = (e) => {
    e.preventDefault();

    const { passwordCurrent, password, passwordConfirm } = formData;

    makeRequest(
      'patch',
      `http://127.0.0.1:5000/api/v1/users/updateMyPassword`,
      'The Password Changed Successfully',
      { passwordCurrent, password, passwordConfirm },
      {
        Authorization: `Bearer ${token}`,
      },
      () => {
        navigate('/login');
      }
    );
  };

  return (
    <form action="" method="post">
      <DynamicForm formFields={formFields} />
      <div className="buttons">
        <button className="cancel" onClick={() => setOpenForm(false)}>
          Cancel
        </button>
        <input type="submit" onClick={submitCode} />
      </div>
    </form>
  );  
}

export default ChangePasswordPage;
