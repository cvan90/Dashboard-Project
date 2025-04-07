import 


function App() {
  return (
    <>
     <HashRouter> 
    <NavBar/>        
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/ContactUs" element={<ContactUS/>}/>
      </Routes>
    </HashRouter>   
    </>
  );
}

export default App;
