import "./Register.css";
import axios from "axios";
import { useState } from "react";
import Navbar from "../../components/Navbar.jsx";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/members/create", {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      });
      alert("Student registration successful");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "15rem",
      }}
      className="containerK reg"
    >
      <Navbar/>
      <div style={{ padding: "1rem" }} className="card reg">
        <h1 style={{ textAlign: "center" }} className="reg">
          Member Registration
        </h1>
        <form>
          <div className="form-group reg">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control reg"
              id="firstName"
              placeholder="Enter first name"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </div>
          <div className="form-group reg">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control reg"
              id="lastName"
              placeholder="Enter last name"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>
          <div className="form-group reg">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control reg"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group reg">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control reg"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            style={{ marginTop: "1rem" }}
            className="btn btn-primary reg"
            onClick={save}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
