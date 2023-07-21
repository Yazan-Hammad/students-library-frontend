import { createContext, useEffect, useState } from "react";
import useBackend from "../hooks/use-backend";
import Swal from "sweetalert2";
import {URL} from "../App";

const CoursesContext = createContext();

function CoursesProvider({ children }) {
  //	Courses & ADFU
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${URL}/api/v1/courses`)
      .then((res) => res.json())
      .then((data) => setCourses(data.data.courses));
  }, []);

  const { notifyError, makeRequest, token } = useBackend();

  const createCourse = (newCourse) => {
    if (!token) {
      notifyError("Please Login");
      return null;
    }

    makeRequest(
      "post",
      `${URL}/api/v1/courses`,
      "Course Successfully Created",
      { ...newCourse },
      { Authorization: `Bearer ${token}` },
      () => {
        const newCourses = [...courses, newCourse];
        setCourses(newCourses);

        handleFormOpening(false);
      }
    );
  };

  const deleteCourseByName = (courseName) => {
    if (!token) {
      notifyError("Please Login");
      return null;
    }

    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert the ${courseName} course !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      result.isConfirmed &&
        makeRequest(
          "delete",
          `${URL}/api/v1/courses`,
          "Course Successfully Deleted",
          { name: courseName },
          { Authorization: `Bearer ${token}` },
          () => {
            const newCourses = courses.filter(
              (course) => course.name != courseName
            );
            setCourses(newCourses);
          }
        );
    });
  };

  const editCourseByName = (oldCourse, newCourse) => {
    if (!token) {
      notifyError("Please Login");
      return null;
    }

    makeRequest(
      'patch',
      `${URL}/api/v1/courses/`,
      'Course Successfully Edited',
      { ...newCourse, currentName: oldCourse.name },
      { Authorization: `Bearer ${token}` },
      () => {
        const newCourses = courses.map((course) =>
          course.id === oldCourse.id ? newCourse : course
        );
        setCourses(newCourses);

        handleFormOpening(false);
      }
    );
  };

  //	Sorting Courses
  const [sortBy, setSortBy] = useState("name");
  const map = new Map([
    ["CS", 1],
    ["SW", 2],
    ["CIS", 3],
    ["BIT", 4],
  ]);
  const sortFunction = (a, b, sortBy) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return map.get(a.department) - map.get(b.department);
  };

  //	Form Handling
  const [isOpen, setOpen] = useState(false);
  const handleFormOpening = (setValue) => {
    if (!token) {
      notifyError("Please Login");
      return null;
    }

    setOpen((open) => setValue);
  };

  return (
    <CoursesContext.Provider
      value={{
        courses,
        sortFunction,
        sortBy,
        setSortBy,
        deleteCourseByName,
        handleFormOpening,
        isOpen,
        createCourse,
        editCourseByName,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}

export { CoursesProvider };
export default CoursesContext;
