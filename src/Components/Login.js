/** @format */

import React from "react";
import "../ComponentCss/Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../Components/StateProvider";
import { actionTypes } from "../Components/reducer";

function Login() {
  //to pull data from the data layer
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2>Welcome to IM Chatroom</h2>
        <img
          src="https://www.kindpng.com/picc/m/150-1509098_text-message-logo-png-message-icon-png-transparent.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign In</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
