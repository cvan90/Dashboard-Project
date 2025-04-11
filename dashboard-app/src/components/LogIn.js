import {Link, useNavigate} from "react-router-dom";
import {useRef, useState, useEffect} from "react";
function LogIn()
 {
  let navigate = useNavigate();
  const usernamesubmit=useRef("")
  const userpasssubmit=useRef("")
  const [msgText, setMsg]=useState("")

  const loginsubmit=(e)=>{

  e.preventDefault()

  console.log("Login Submitted")
  console.log(`username:${usernamesubmit.current.value} password: ${userpasssubmit.current.value}`)

  let _msg ="";
  let _replit_url= "https://9246a3e9-3cb0-4bc9-a109-e01a5eec5873-00-dq79sb088n9e.worf.replit.dev";

  const _uid =usernamesubmit.current.value
  const _pwd = userpasssubmit.current.value

  const _url = `https://${_replit_url}/login/${_uid}/${_pwd}`; 

  if(_uid === null || _uid.trim().length === 0)
    {
        _msg = "Invalid username Submitted";                
        setMsg(_msg)                
        return false;
    }
    
    if(_pwd === null || _pwd.trim().length === 0)
    {
        _msg = "invalid password Submitted";                
        setMsg(_msg)                
        return false;
    }
    
    fetch(_url)
    .then((res)=>res.json())
    .then((data)=> {
        
        if(data.login === true)
        {
            console.log("navigate to dashboard")
            navigate("/dashboard")
            //navigate("/dashboard",{replace:true})
        }

        setMsg(data.msg)
    })
    .catch((error)=>{
        setMsg("request error");
        console.log("request error *");
        console.log(error);
    });
    usernamesubmit.current.value="";
    userpasssubmit.current.value="";
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