import React, { useEffect, useState, useRef } from 'react';
import '../../css/Course.css';
import { FaEllipsisH } from 'react-icons/fa';
import PopupFormPage from '../../pages/PopupFormPage';
import CourseFormPage from '../../pages/CourseFormPage';
import useCourses from '../../hooks/use-courses';
import Swal from 'sweetalert2';
import useBackend from '../../hooks/use-backend';

function Course({
  image,
  name,
  id,
  department,
  book,
  videos,
  setEiditedCourse,
}) {
  //  Hooks
  const [openedCard, setOpenedCard] = useState(false);
  const [openOption, setOpenOption] = useState(false);

  const [highlight, setHighlight] = useState(true);

  const divEl = useRef();

  const { deleteCourseByName } = useCourses();
  const { user, notifyError } = useBackend();

  useEffect(() => {
    //  Hilighting
    const timeout = setTimeout(() => {
      setHighlight(null);
    }, 2000);

    //  Close Option List
    const openOptionHandler = (event) => {
      if (!divEl.current?.contains(event.target)) {
        setOpenOption((value) => false);
      } else {
        if (!user) return notifyError('Please Login');
        setOpenOption((value) => !value);
      }
    };

    document.addEventListener('click', openOptionHandler, true);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('click', openOptionHandler);
    };
  }, []);

  const handleClick = (event) => {
    const tag = event.target.tagName.toLowerCase();
    const exclude = ['a', 'svg', 'path', 'li', 'ul'];

    if (!exclude.includes(tag)) {
      setOpenedCard((openedCard) => !openedCard);
    }
  };

  const handleEditing = () => {
    setEiditedCourse({
      image,
      name,
      id,
      department: department.toLowerCase(),
      book,
      videos,
    });
  };

  return (
    <div
      className={`course ${openedCard ? 'active' : ''} ${
        highlight ? 'hilight' : ''
      }`}
      onClick={handleClick}
    >
      <div className="course-inner">
        <div className="course-front">
          <div className={`option ${openOption ? 'opened' : ''}`}>
            <div className="custom" ref={divEl}>
              <FaEllipsisH />
            </div>
            <ul>
              <li onClick={handleEditing}>Edit Course</li>
              <li onClick={() => deleteCourseByName(name)}>Delete Course</li>
            </ul>
          </div>
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <h2>{name}</h2>
          <p className="department">
            <span className="centered">{department.toUpperCase()}</span>
          </p>
          <p>🆔 {id}</p>
        </div>
        <div className="course-back">
          <h2>{name}</h2>
          <div className="content">
            {book && (
              <a href={book} target="_blank" rel="noreferrer">
                📖 Book
              </a>
            )}
            {videos && (
              <a href={videos} target="_blank" rel="noreferrer">
                🎥 Videos
              </a>
            )}
            {Boolean(book) || Boolean(videos) || <p>There are no resources</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
