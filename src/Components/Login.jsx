import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext.js";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h1> Login </h1>
      <input
        type="text"
        placeholder="userName"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
