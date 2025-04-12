
import {Link} from "react-router-dom";
function NavBar(){
    return (
        <>
        <nav className="navbar" >
            <Link to="/" style={{width:"95%"}}>Home</Link>
            <Link to="/LogIn">Logout</Link>
        </nav>
        </>
    );
}
export default NavBar;