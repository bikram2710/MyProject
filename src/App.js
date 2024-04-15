import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import Alert from './components/alert';
import {  
  BrowserRouter,
  Route,
  Routes,  
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');  // wheter daek mode is enabled or not
  const [alert , setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title ="TextUtilis Dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success")
      document.title ="TextUtilis Light mode";
    }  
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert ={alert}/>
    <div className="container">
    <Routes>
          <Route path="/about"  element={<About/>}>
          </Route>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text For Analyze" mode={mode} />}>
          </Route>
    </Routes>      
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;