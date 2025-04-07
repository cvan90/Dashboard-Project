import {Link} from "react-router-dom";
function Home(){
      return (
    
        <>
        <p>
          <h2>Welcome Please Login/Register Below</h2>
          </p>
        <p></p>
        <p>
        <Link to="/LogIn">Login</Link>
        </p>
        <p>
        <Link to="/Register">Register</Link>
        </p>
        <p>
        <Link to="/Dashboard">Dashboard</Link>
        </p>

        </>
      );
    };

    export default Home;