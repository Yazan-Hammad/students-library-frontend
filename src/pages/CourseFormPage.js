import React, { useState, useEffect } from 'react';
import FormContent from '../components/LibraryPage/CourseFormPage/CourseFormContent';
import useCourses from '../hooks/use-courses';


function CourseFormPage({ formData, setFormData, mode, setOpenForm}) {
  const { createCourse, editCourseByName } = useCourses();

  let initialCopy;
  useEffect(() => {
    initialCopy = { ...formData };
  });

  const submit = async function (e) {
    e.preventDefault();

    if (mode === 'editing') editCourseByName(initialCopy, formData);
    else createCourse(formData);

    setFormData(false);
    setOpenForm((value) => false);
  };

  return (
    <FormContent
      formData={formData}
      setFormData={setFormData}
      submit={submit}
    />
  );
}

export default CourseFormPage;
