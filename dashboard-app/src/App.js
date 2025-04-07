import Home from "./components/Home"
import {HashRouter, Routes, Route} from "react-router-dom"
import LogIn from "./components/LogIn"
import Register from "./components/Register"
import NavBar from "./components/NavBar";
import "./App.css"
function App() {

  return (
    <>
<HashRouter> 
    <NavBar/>        
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </HashRouter>   
  
    </>
  );
}

export default App;
