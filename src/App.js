import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Router from "./components/Router";

import Header from "./pages/Header";
import LibraryPage from "./pages/LibraryPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

import { CoursesProvider } from "./contexts/courses";
import { BackendProvider } from "./contexts/backend";

function App() {
  return (
    <>
      <BackendProvider>
        <Router path="/signup">
          <SignupPage />
        </Router>
        <Router path="/login">
          <LoginPage />
        </Router>
         <Router path="/forgotpassword">
          <ForgotPasswordPage />
        </Router>
        <Router path="/resetpassword">
          <ResetPasswordPage />
        </Router>
        <Router path="/">
          <Header />
          <CoursesProvider>
            <LibraryPage />
          </CoursesProvider>
        </Router>
        <Router path="/profile">
          <Header />
          <ProfilePage/>
        </Router>
      </BackendProvider>
    </>
  );
}

export default App;
