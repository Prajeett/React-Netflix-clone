import React, { useRef } from "react";
import "./signupScreen.css";
import { auth } from "../firebase";
const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1> Sign Up</h1>
        <input ref={emailRef} type="Email" placeholder="Email" />
        <input ref={passwordRef} type="Password" placeholder="Password" />
        <button type="Submit" onClick={register}>
          Sign Up
        </button>

        <h4>
          {" "}
          <span className="signupScreen_gray">Sign Up to Continue </span>{" "}
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
