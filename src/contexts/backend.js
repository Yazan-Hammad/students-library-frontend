import axios from "axios";
import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BackendContext = createContext();

function BackendProvider({ children }) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(undefined);

  const setUserInfo = async (token) => {
    setToken(token);

    try {
      const decoded = jwtDecode(token);
      const response = await axios.get(
        `http://127.0.0.1:5000/api/v1/users/${decoded.id}`
      );
      setUser(response.data.data.user);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifySuccess = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const makeRequest = async (
    method,
    url,
    message,
    data = {},
    headers = {},
    todo = () => {}
  ) => {
    try {
      let response;
      if (method === "post" || method === "patch")
        response = await axios[method](url, data, { headers });
      else
        response = await axios[method](url, {
          headers,
          data,
        });

      if (response?.data?.token) {
        setUserInfo(response?.data?.token);
      }
      notifySuccess(message);

      todo();
    } catch (error) {
      console.log(error);
      notifyError(error.response?.data?.message);
    }
  };

  return (
    <BackendContext.Provider
      value={{ token, user, notifyError, notifySuccess, makeRequest }}
    >
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BackendContext.Provider>
  );
}

export { BackendProvider };
export default BackendContext;
