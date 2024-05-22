import './index.css';
import Navbar from "./components/Navbar";
import SignUpForm from './components/SignUpForm';
import React, { useEffect, useState } from "react";

const App: React.FC =  () => {
 const [message, setMessage] = useState<String>("");


 useEffect(() => {
  fetch("/api/message")
  .then(response => response.text())
  .then(data => setMessage(data))
  .catch(error => console.error("Error:", error));
 }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="signup-banner">
        <h1>Sign Up Page</h1>
      </div>
        <SignUpForm/>
    </div>
  );
}

export default App;
