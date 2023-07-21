import { useContext } from "react";
import CoursesContext from "../contexts/courses";

function useCourses() {
  return useContext(CoursesContext);
}

export default useCourses;
