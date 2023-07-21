import React, { useEffect, useRef, useState } from 'react';

import '../css/Profile.css';
import useBackend from '../hooks/use-backend';

import { GoGear } from 'react-icons/go';

import PopupFormPage from './PopupFormPage';
import ChangePasswordPage from './ChangePasswordPage';

function Profile() {
  const [setting, setSetting] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    passwordCurrent: '',
    password: '',
    passwordConfirm: '',
  });

  const gearEl = useRef();

  useEffect(() => {
    const openSettingHandler = (event) => {
      if (!gearEl.current?.contains(event.target)) {
        setSetting((value) => false);
      } else {
        setSetting((value) => !value);
        if(event.target.innerText?.toLowerCase() === 'change password') {
          setOpenForm(() => true)
        }
      }
    };

    document.addEventListener('click', openSettingHandler, true);

    return () => {
      document.removeEventListener('click', openSettingHandler);
    };
  }, []);

  const { token, user } = useBackend();

  if (!token) {
    return <h1 className="centered">Please Login</h1>;
  }

  const { name, role, email, brief } = user;

  const hasImage = false;

  const initials = name
    ?.split(' ')
    ?.map((name) => name[0])
    ?.join('');

  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="basic-info">
            {hasImage ? (
              <img
                src="user-image.jpg"
                alt="User Image"
                className="user-image"
              />
            ) : (
              <div className="image-alternative">{initials}</div>
            )}
            <h2 className="user-name">{name}</h2>
            <h3 className="user-role">
              {role?.replace(role?.[0], role?.[0].toUpperCase())}
            </h3>
            <p className="user-email">{email}</p>
          </div>
          <div className="user-brief">
            <h2>Brief</h2>
            {brief}
          </div>
          <div ref={gearEl} className='setting-container'>
            <GoGear className={setting ? `active` : ''}/>
            {setting && (
              <ul className="settings">
                <li>Change Password</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {openForm && (
        <PopupFormPage setOpenForm={setOpenForm}>
          <ChangePasswordPage
            formData={formData}
            setFormData={setFormData}
            setOpenForm={setOpenForm}
          />
        </PopupFormPage>
      )}
    </>
  );
}

export default Profile;
