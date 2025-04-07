import {useEffect, useRef} from "react"
function ContactUS() {
  
  
    const outputDiv = useRef("");
    const txtfirstname = useRef("");
    const txtlastname = useRef("");
    const txtemail = useRef("");
    const txtcomment = useRef("");
  
const btnsubmitform = (event)=>
        {
            let _msg = "";
    
            event.preventDefault();
    
            outputDiv.current.innerText = _msg
            console.log(_msg)
    
            if(txtfirstname.current.value == null | txtfirstname.current.value.trim().length == 0) {
              _msg = "---Please Enter First Name---"
              outputDiv.current.innerText = _msg;
              return false;  
            }
            if(txtlastname.current.value == null | txtlastname.current.value.trim().length == 0) {
                _msg = "---Please Enter Last Name---"
                outputDiv.current.innerText = _msg;
                return false;  
              }
    
            if(txtemail.current.value == null | txtemail.current.value.trim().length == 0) {
              _msg = "---Please Enter a Valid Email---"
              outputDiv.current.innerText = _msg;
              return false;  
            }
    
            if(txtcomment.current.value == null | txtcomment.current.value.trim().length == 0) {
              _msg = "---please enter a valid comment---"
              outputDiv.current.innerText = _msg;
              return false; 
            }
    
            outputDiv.current.innerText = "---Form Submitted---"
    
            _msg = `---Form submited---: ${txtfirstname.current.value}- ${txtlastname.current.value} - ${txtemail.current.value}
            - ${txtcomment.current.value}`
           
            console.log(_msg)
    
            
            txtfirstname.current.value = "";
            txtlastname.current.value = "";
            txtemail.current.value = "";
            txtcomment.current.value = "";
    
            
            txtfirstname.current.focus()
    
        }

      useEffect(()=>{
      console.log("---Contact-Us Page Loaded---")
    
    },[])


    return (
        <>
        <div>
        <h2>Contact Us</h2>
        <div ref={outputDiv}></div><br/>
        <form>
            <div>
                <span>First Name:</span><input ref={txtfirstname} type="text" placeholder="First Name"/>
                <br/>
                <span>Last Name:</span><input ref={txtlastname} type="text" placeholder="Last Name"/>
                <br/>
                <span>Email:</span><input ref={txtemail} type="text" placeholder="Email Address"/>
                <br/>
                <span>Comments:</span>
                <br/><textarea ref={txtcomment} rows={5} cols={30} placeholder="Comment Here"/><br/>
                <button onClick={(e)=>btnsubmitform(e)}>Submit</button>{" "}
            </div>
        </form>
        </div>
        </>
    )
}

export default ContactUS;