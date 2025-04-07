
import {Link} from "react-router-dom";
function NavBar(){
    return (
        <>
        <nav>
            <Link to="/">Home</Link>{" | "}
            <link to="/Dashboard">Dashboard</link>
        </nav>
        </>
    );
}
export default NavBar;