import React from "react";
import './App.css';
import ChatBody from "./components/chatbody/chatbody";
import Nav from './components/nav/nav'


function App() {
  return (
    <div className="main">
      <Nav />
       <ChatBody /> 

    </div>
  );
}

export default App;
