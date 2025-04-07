import {Link} from "react-router-dom";
function LogIn() {

    return (
        <>
        <div>
        <h2>Login</h2>
      </div>
      <form>
        <label>UserName:</label><input type="text" placeholder="Enter Username" maxLength={25}></input><br/>
        <label>Password:</label><input type="text" placeholder="Enter PassWord" maxLength={25}></input>
        <p></p>
        <button>Submit</button>
      </form>
      <p></p>
       <p><Link to="/Register">Register</Link></p>
      
        </>
    )
}

export default LogIn;