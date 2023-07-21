import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/PopupFormPage.css';
import useCourses from '../hooks/use-courses';
import DynamicForm from '../components/Form/DynamicForm';

function PopupFormPage({ setOpenForm, children }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const closeForm = () => {
    setOpenForm((value) => false);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // const useForm = () => {
  //   setOpen((value) => true);
  // };

  // const inputFields = Object.keys(formData).map((key) => {
  //   return (
  //     <InputTextField
  //       label={key.toUpperCase()}
  //       value={formData[key]}
  //       onChange={handleChange}
  //       name={key}
  //     />
  //   );
  // });

  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={closeForm}></div>
      <div className="form-container">{children}</div>
    </>,
    document.querySelector('.modal-container')
  );
}

export default PopupFormPage;
