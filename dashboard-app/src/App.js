import Home from "./components/Home";
import {HashRouter,Routes,Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </HashRouter>
    </>
  );
}

export default App;
