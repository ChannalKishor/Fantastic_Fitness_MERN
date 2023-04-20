import React from "react";
import "./login.css";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/user/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            // console.log(res);
            if (email === "admin@gmail.com" && password === "Admin@123") {
              alert("Login Successfully as Admin");
              navigate("/admin");
            } else {
              const data = res.data;
              console.log("data:", data);

              if (data === true) {
                alert("Login Successfully");
                navigate("/land");
              } else {
                console.log("data.status:", data.status);
                alert("Login Failed");
              }
            }
          },
          (fail) => {
            console.log(email);
            console.log(password);
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className=".body"
    >
      <div className="login-container">
        <div className="login-row">
          <h2 className="login-title">Login</h2>
          <hr />
        </div>

        <div className="login-row">
          <div className="login-col">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary login-btn"
                onClick={login}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
