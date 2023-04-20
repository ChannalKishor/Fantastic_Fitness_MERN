import React, { useState, useEffect } from "react";
import axios from "axios";

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/members/getAll").then((response) => {
      setUsers(response.data);
    });
  }, []);

  console.log(users);

  return (
    <div style={{ overflowX: "auto", paddingTop: "100px" }}>
      <table
        style={{
          border: "1px solid #ccc",
          borderCollapse: "collapse",
          width: "100%",
          paddingTop: "100px",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>ID</th>
            <th style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>
              Name
            </th>
            <th style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  color: "white",
                }}
              >
                {user._id}
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  color: "white",
                }}
              >
                {user.firstName}
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  color: "white",
                }}
              >
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
