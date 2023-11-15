import React, { useRef, useState } from "react";
const Register = () => {
  const username = useRef();
  const emailId = useRef();
  const password = useRef();

  const [users, setUsers] = useState([]);

  const addUser = () => {
    const newUser = {
      username: username.current.value,
      email: emailId.current.value,
      password: password.current.value,
    };

    setUsers([...users, newUser]);

    username.current.value = "";
    emailId.current.value = "";
    password.current.value = "";
  };

  return (
    <div>
      <label>Username</label>
      <input type="text" ref={username} />
      <br />
      <label>Email</label>
      <input type="email" ref={emailId} />
      <br />
      <label>Password</label>
      <input type="password" ref={password} />
      <br />
      <button onClick={addUser}>Add User</button>

      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <td>Username</td>
            <td>Email</td>
            <td>Password</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Register;
