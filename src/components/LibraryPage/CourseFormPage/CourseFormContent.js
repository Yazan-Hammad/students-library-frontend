import React, { useState } from "react";
import useCourses from "../../../hooks/use-courses";
import {
  handleChange,
  handleFocus,
  handleBlur,
} from '../../Form/formHelpers';
import DynamicForm from '../../Form/DynamicForm';


function CourseFormContent({
  formData,
  submit,
  setFormData
}) {
  const { handleFormOpening } = useCourses();

  const [focusedFields, setFocusedFields] = useState({
    name: false,
    id: false,
    department: false,
    image: false,
    book: false,
    videos: false,
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
      className: focusedFields.name? 'focused': '',
      title: 'name',
      embeddedProps: {
        value: formData.name,
        ...embeddedFunctions,
      },
    },
    {
      inputType: 'textField',
      className: focusedFields.id? 'focused': '',
      title: 'ID',
      name: 'id',
      embeddedProps: {
        value: formData.id,
        ...embeddedFunctions,
      },
    },
    {
      inputType: 'radio',
      radioTitle: 'department',
      name: 'department',
      options: [
        {
          id: 'cs',
          title: 'CS',
        },
        {
          id: 'sw',
          title: 'SW',
        },
        {
          id: 'cis',
          title: 'CIS',
        },
        {
          id: 'bit',
          title: 'BIT',
        },
      ],
      embeddedProps: {
        value: formData.department,
        ...embeddedFunctions,
        // onChange: onRadioChange,
      },
    },
    {
      inputType: 'textField',
      className: focusedFields.image? 'focused': '',
      title: 'image',
      embeddedProps: {
        value: formData.image,
        ...embeddedFunctions,
      },
    },
    {
      inputType: 'textField',
      className: focusedFields.book? 'focused': '',
      title: 'book',
      embeddedProps: {
        value: formData.book,
        ...embeddedFunctions,
      },
    },
    {
      inputType: 'textField',
      className: focusedFields.videos? 'focused': '',
      title: 'videos',
      embeddedProps: {
        value: formData.videos,
        ...embeddedFunctions,
      },
    },
  ];  

  const handlePaste = function (event) {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text/plain");
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: pastedText,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or further processing with the formData
    handleFormOpening(false); // Close the overlay after form submission
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DynamicForm formFields ={formFields}/>
        <input
          type="submit"
          onClick={(e) => {
            submit(e);
          }}
        ></input>
      </form>
    </>
  );
}

export default CourseFormContent;
