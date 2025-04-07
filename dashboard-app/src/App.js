import Home from "./components/Home"
import {HashRouter, Routes, Route} from "react-router-dom"
import LogIn from "./components/LogIn"
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
      </Routes>
    </HashRouter>   
  
    </>
  );
}

export default App;
