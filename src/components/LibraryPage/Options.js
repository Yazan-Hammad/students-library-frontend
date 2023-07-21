import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import '../../css/Options.css';
import PopupFormPage from '../../pages/PopupFormPage';
import useCourses from '../../hooks/use-courses';
import useBackend from '../../hooks/use-backend';
import { handleBlur, handleChange, handleFocus } from '../Form/formHelpers';
import CourseFormPage from '../../pages/CourseFormPage';

function Options() {
  const { sortBy, setSortBy } = useCourses();
  const { user, notifyError } = useBackend();

  const [openForm, setOpenForm] = useState(false);
  const handleOpening = () => {
    if (!user) {
      return notifyError('Please Login');
    }
    setOpenForm((value) => true);
  };

  const [formData, setFormData] = useState({
    name: '',
    id: '',
    department: '',
    image: '',
    book: '',
    videos: '',
  });

  const onChange = handleChange(setFormData);
  const onFocus = handleFocus;
  const onBlur = handleBlur;

  const embeddedFunctions = {
    onChange,
    onFocus,
    onBlur,
  };

  return (
    <>
      <div className="options container">
        <button onClick={handleOpening}>
          <GoPlus /> Add Course
        </button>
        <p>
          Sort Courses By:
          <button
            className={sortBy === 'name' ? 'active' : ''}
            onClick={() => setSortBy('name')}
          >
            Name
          </button>
          <button
            className={sortBy !== 'name' ? 'active' : ''}
            onClick={() => setSortBy('department')}
          >
            Department
          </button>
        </p>
      </div>
      {openForm && (
        <PopupFormPage setOpenForm={setOpenForm}>
          <CourseFormPage
            formData={formData}
            setFormData={setFormData}
            setOpenForm={setOpenForm}
          />
        </PopupFormPage>
      )}
    </>
  );
}

export default Options;
