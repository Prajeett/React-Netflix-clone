import React, { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./signupScreen.css";
import { auth } from "../firebase";
const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signupScreen">
      <form>
        <h1> Sign In</h1>
        <input ref={emailRef} type="Email" placeholder="Email" />
        <input ref={passwordRef} type="Password" placeholder="Password" />
        <button type="Submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          {" "}
          <span className="signupScreen_gray">New to Netflix? </span>{" "}
          <span className="signupScreen_link" onClick={register}>
            Sign Up now.
          </span>{" "}
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
