import React from 'react';
import { useAppContext } from '../../context/AppContext';
import './Login.css';

const Login = () => {
  const { setShowUserLogin, setUser } = useAppContext();
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const endpoint = state === "login" ? "http://localhost:4000/login" : "http://localhost:4000/signup";

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          username: name
        })
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        setUser({ email, name });
        setShowUserLogin(false);
      } else {
        setError(data.errors || "Something went wrong");
      }
    } catch (err) {
      setError("Server error, please try again later.");
    }
  }

  return (
    <div className="login-overlay" onClick={() => setShowUserLogin(false)}>
      <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="login-form">
        <p className="login-title">
          <span className="login-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
        </p>
        {error && <p className="login-error">{error}</p>}

        {state === "register" && (
          <div className="login-field">
            <p>Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" required placeholder="Type your name" />
          </div>
        )}

        <div className="login-field">
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required placeholder="Type your email" />
        </div>

        <div className="login-field">
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required placeholder="Type your password" />
        </div>

        <p className="login-toggle">
          {state === "register" ? (
            <>Already have an account? <span onClick={() => setState("login")}>Click here</span></>
          ) : (
            <>Create an account? <span onClick={() => setState("register")}>Click here</span></>
          )}
        </p>

        <button type="submit" className="login-button">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;