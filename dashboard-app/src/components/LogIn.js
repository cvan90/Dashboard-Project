
function LogIn() {

    return (
        <>
        <div>
        <h2>Login</h2>
      </div>
      <form>
        <label>UserName:</label><input type="text" placeholder="Enter Username" maxLength={25}></input>
        <label>Password:</label><input type="text" placeholder="Enter PassWord" maxLength={25}></input>
        <button>Submit</button>
      </form>
       
      
        </>
    )
}

export default LogIn;