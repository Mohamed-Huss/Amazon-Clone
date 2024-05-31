import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    // do some fancy firebase login shittttttt............
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created anew user with email and password
        console.log(auth);

        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    // do some fancy firebase registershittttttt............
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_Logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Acount
        </button>
      </div>
    </div>
  );
}

export default Login;
