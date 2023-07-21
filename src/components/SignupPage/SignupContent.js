import Link from '../Link';
import Logo from '../../images/logo.png';
import { handleFocus, handleBlur, handleChange } from '../Form/formHelpers';
import DynamicForm from '../Form/DynamicForm';
import { useState } from 'react';

function SignupContent({ formData, setFormData, submit }) {
  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const onChange = handleChange(setFormData);
  const onFocus = handleFocus(setFocusedFields);
  const onBlur = handleBlur(setFocusedFields);

  const embeddedFunctions = {
    onChange,
    onFocus,
    onBlur,
  };
  const formFields = [
    {
      inputType: 'textField',
      title: 'name',
      className: focusedFields.name ? 'focused' : '',
      embeddedProps: {
        value: formData.name,
        ...embeddedFunctions,
      },
    },
    {
      inputType: 'textField',
      title: 'email',
      type: 'email',
      className: focusedFields.email ? 'focused' : '',
      embeddedProps: {
        value: formData.email,
        ...embeddedFunctions,
      },
    },
    {
      inputType: 'textField',
      title: 'password',
      type: 'password',

      className: focusedFields.password ? 'focused' : '',
      embeddedProps: {
        value: formData.password,
        ...embeddedFunctions,
      },
    },
    {
      inputType: 'textField',
      title: 'password-confirm',
      type: 'password',
      name: 'passwordConfirm',
      className: focusedFields.confirmPassword ? 'focused' : '',
      embeddedProps: {
        value: formData.confirmPassword,
        ...embeddedFunctions,
      },
    },
  ];

  return (
    <>
      <div className="content">
        <img src={Logo} alt="Logo" className="logo" />
        <p>
          Connect with your classmates and the Universities around you on
          <span>StudentsLibrary</span>
        </p>
      </div>
      <div className="signup-section">
        <form action="" method="post">
          <DynamicForm formFields={formFields}/>
          <input type="submit" onClick={submit}></input>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}

export default SignupContent;
