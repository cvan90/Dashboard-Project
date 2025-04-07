
import {Link} from "react-router-dom";
function NavBar(){
    return (
        <>
        <nav>
            <Link to="/">Home</Link>{" | "}
           <Link to="/LogIn">Log-In</Link>{" | "}
           <Link to="/Register">Register</Link>
        </nav>
        </>
    );
}
export default NavBar;