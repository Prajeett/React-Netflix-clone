import React, { useRef, useState } from "react";
import "./SigninScreen.css";
import { auth } from "../firebase";
import SignupScreen from "./SignupScreen";

const SigninScreen = () => {
const [SwitchPage, setSwitchPage] = useState(false)
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
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
    <>
          {SwitchPage ? (
        <SignupScreen />
      ) : (
    <div className="signupScreen">

  
        <form>
          <h1> Sign In</h1>
          <input ref={emailRef} type="Email" placeholder="Email" />
          <input ref={passwordRef} type="Password" placeholder="Password" />
          <button type="Submit" onClick={signIn} className="signupScreen_link">
            Sign In
          </button>
          <button
            type="Submit"
            className="signupScreen_link"
            onClick={()=> setSwitchPage(true)}
          >
            Sign Up
          </button>

          <h4>
            {" "}
            <span className="signupScreen_gray">New to Netflix? </span>{" "}
            <span className="signupScreen_link" onClick={()=> setSwitchPage(true)}>
              Sign Up now.
            </span>{" "}
          </h4>
        </form>
 
      
    </div>)}
    </>
  );
};

export default SigninScreen;
