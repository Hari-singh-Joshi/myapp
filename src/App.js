import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const toggleMode = () => {
   
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      document.body.style.backgroundColor = newMode === 'light' ? 'White' : 'grey';
      showAlert(`${newMode === 'light' ? 'Light' : 'Dark'} mode has been enabled`, 'Success');
      return newMode;
    });
  };

  return (
    <>
    <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} toggleMode={toggleMode} heading="Enter your text to analyze" />} />
    </Routes>
  </div>
</Router>

</>
 );
  }
export default App;
