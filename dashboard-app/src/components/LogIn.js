import {Link} from "react-router-dom";
import {useRef} from "react";
function LogIn()
 {
  const usernamesubmit=useRef("")
  const userpasssubmit=useRef("")

  const loginsubmit=(e)=>{

  e.preventDefault()

  console.log("Login Submitted")

}
    return (
        <>
        <div>
        <h2>Login</h2>
      </div>
      <form>
        <label>UserName:</label><input ref={usernamesubmit} type="text" placeholder="Enter Username" maxLength={25}></input><br/>
        <label>Password:</label><input ref={userpasssubmit} type="text" placeholder="Enter PassWord" maxLength={25}></input>
        <p></p>
        <p>{msgText}</p>

        <button onClick={(e)=>loginsubmit(e)}>Submit</button>
      </form>
      <p></p>
       <p><Link to="/Register">Register</Link></p>
      
        </>
    )
}

export default LogIn;