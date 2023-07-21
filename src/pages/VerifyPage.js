// import React, { useState, useEffect } from "react";
// import "../css/ResetPasswordPage.css";
// import useBackend from "../hooks/use-backend";
// import useNavigation from "../hooks/use-navigation";

// function VerifyPage() {
//   const { makeRequest, notifyError, notifySuccess, user } = useBackend();
//   const { navigate } = useNavigation();

//   const [code, setCode] = useState("");

//   const createAccount = () => {
//     makeRequest(
//       "post",
//       "http://127.0.0.1:5000/api/v1/users/signup",
//       "Created Successfully",
//       {
//         name: name,
//         email: email,
//         password: password,
//         passwordConfirm: passwordConfirm,
//       },
//       {},
//       () => navigate("/")
//     );
//   };

//   const submitCode = () => {
//     if(code === verificationCode) {
//       createAccount();
//     }
//     else {
//       notifyError('The code is not correct, please enter again');
//     }
//   }

//   return (
//     <div className="reset-box">
//       <h1>Find Your Account</h1>
//       <form action="" method="post">
//         <p>Please enter your email to search for your account.</p>
//         <input
//           value={code}
//           type="text"
//           onChange={(e) => setCode(e.target.value)}
//           name="code"
//           placeholder="XXXX"
//         />
//         <div className="buttons">
//           <button
//             id="cancel"
//             onClick={() => {
//               navigate("/login");
//             }}
//           >
//             Cancel
//           </button>
//           <input type="submit" onClick={submitCode}></input>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default VerifyPage;
