import { Link } from "react-router-dom";
import mygo from "../components/images/MGM_FULL_LOGO.png"
const Header=() =>
{
    return (

        <>
        <img src={mygo} height="100px" width="500px"/>
        <h1>
            <Link to={"/register"} >Register</Link>
            <Link to={"/Login"} >Login</Link>
            <Link to={" "} >Home</Link>
        </h1>
        </>
       
    )
}
export default Header;