import {Link} from "react-router-dom";
function Home(){
      return (
    
        <>
        <div className="app-center-page">
         <h2>Welcome Please Login/Register Below</h2>
        
        <p></p>
        <p></p>
        <p>Please login or register with one of the links below to view your dashboard.</p>
        <p>
        <Link to="/LogIn">Login</Link>
        </p>
        <p>
        <Link to="/Register">Register</Link>
        </p>
        <p>
        <Link to="/Dashboard">Dashboard</Link>
        </p>
        </div>
        </>
      );
    };

    export default Home;