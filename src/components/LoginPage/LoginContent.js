import Link from '../Link';
import Logo from '../../images/logo.png';
import { useState } from 'react';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import DynamicForm from '../Form/DynamicForm';
import { handleFocus, handleBlur, handleChange } from '../Form/formHelpers';

function LoginContent({ formData, setFormData, submit }) {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const [focusedFields, setFocusedFields] = useState({
    email: false,
    password: false,
  });

  const onFocus = handleFocus(setFocusedFields);
  const onBlur = handleBlur(setFocusedFields);
  const onChange = handleChange(setFormData);

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
    {
      inputType: 'textField',
      title: 'password',
      type: 'password',
      className: focusedFields.password ? 'focused' : '',
      embeddedProps: {
        value: formData.password,
        onChange,
        onFocus,
        onBlur,
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
      <div className="login-section">
        <form action="" method="post">
          <DynamicForm formFields={formFields} />
          <input type="submit" onClick={submit}></input>
        </form>
        <Link to="/signup">Signup</Link>
        <Link to="/forgotpassword">forget your password?</Link>
      </div>
    </>
  );
}

export default LoginContent;
