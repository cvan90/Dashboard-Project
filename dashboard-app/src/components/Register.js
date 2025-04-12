import {Link} from "react-router-dom";
import { useState, useRef, useEffect } from "react";


function Register() {
  const txtusername = useRef("")
  const txtpassword = useRef("")
  const txtconfirmpassword = useRef("")
  const chkterm = useRef("")
  const [msgText, setMsg] = useState("")

  let navigate = useNavigate();

  const handleSubmit = (e)=>{
      e.preventDefault()

      console.log("handle submit")


      let _msg = "";
      let _replit_url = "https://9246a3e9-3cb0-4bc9-a109-e01a5eec5873-00-dq79sb088n9e.worf.replit.dev";
  
      const _uid = txtusername.current.value
      const _pwd = txtpassword.current.value
      const _confirmpwd = txtconfirmpassword.current.value
      const _chkterm = chkterm.current.checked
      
      //const _url = `http://localhost:8080/register`;  
      const _url = `${_replit_url}/register`;  

      if(_uid === null || _uid.trim().length === 0)
      {
          _msg = "invalid Username";                
          setMsg(_msg)                
          return false;
      }
      
      if(_pwd === null || _pwd.trim().length === 0)
      {
          _msg = " invalid Password";                
          setMsg(_msg)                
          return false;
      }
          
      if(_pwd !== _confirmpwd)
      {
          _msg = "confirm password does not match password";
          setMsg(_msg)                
          return false;
      }
         
      if(_chkterm === false)
      {
          _msg = "Please select terms/services";
          setMsg(_msg)                
          return false;
      }

      const _post_data = {username:_uid, password:_pwd};

      fetch(_url,{method:'POST',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(_post_data)}
      )
      .then((res)=>res.json())
      .then((data)=> {
          
          if(data.register === true)
          {
              navigate("/dashboard",{replace:true})
          }

          setMsg(data.msg)
      })
      .catch((error)=>{
          setMsg("request error");
          console.log("request error *");
          console.log(error);
      });
  
      txtusername.current.value = "";
      txtpassword.current.value = "";
      txtconfirmpassword.current.value = ""
      chkterm.current.checked = false

  }

    return (
        <>
        <div>
        <h2>Register</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>UserName:</label><input ref={txtusername} type="text" placeholder="Enter Username" maxLength={25}></input><br/>
        <label>Password:</label><input ref={txtpassword} type="password" placeholder="Enter PassWord" maxLength={25}></input><br/>
        <label>Confirm Password:</label><input ref={txtconfirmpassword} type="text" placeholder=" Confirm PassWord" maxLength={25}></input>
        <p></p>
        <input type="checkbox" ref={chkterm}/>Terms and Services
        <p></p>
        <button>Submit</button>
      </form>
       <p></p>
      <p><Link to="/LogIn">Log-In</Link></p>
      </div>
        </>
    )
}

export default Register;