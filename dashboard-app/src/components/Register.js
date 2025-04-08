import {Link} from "react-router-dom";
function Register() {

    return (
        <>
        <div>
        <h2>Register</h2>
      </div>
      <form>
        <label>UserName:</label><input type="text" placeholder="Enter Username" maxLength={25}></input><br/>
        <label>Password:</label><input type="text" placeholder="Enter PassWord" maxLength={25}></input><br/>
        <label>Confirm Password:</label><input type="text" placeholder="Please Confirm PassWord" maxLength={25}></input>
        <p></p>
        <input type="checkbox"/>Terms and Services
        <p></p>
        <button>Submit</button>
      </form>
       <p></p>
      <p><Link to="/LogIn">Log-In</Link></p>
        </>
    )
}

export default Register;