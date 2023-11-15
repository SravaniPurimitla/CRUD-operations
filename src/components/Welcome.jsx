import {Link} from "react-router-dom"
const Welcome=()=>{
    return(
        <>
        <h1>Welcome to Mygominds</h1>
        <Link to={"/Product"} >Product</Link>
        <Link to={"/Order"} >Order</Link>
        
        </>
    )
};
export default Welcome;