import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const uname = useRef();
  const pwd = useRef();
  const [error,setError]=useState("")
  const navigate = useNavigate();

  const validate = () => {
    uname.current.value === "Mygominds" && pwd.current.value === "mygo@123"? navigate('/Welcome'):setError("InvalidCredentials");
    
  }

  return (
    <>
      UserName
      <input type="text" ref={uname}></input><br></br>
      Password
      <input type="password" ref={pwd}></input><br></br>
      <button onClick={validate}>SignIn</button><br></br>
    <h1>{error}</h1>
    </>
  );
}

export default Login;
