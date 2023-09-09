import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Button } from "react-bootstrap";
import WebRouter from './config/routers/routes';
import { useState } from 'react';
function App() {


  return (
      <div className="App">
      <WebRouter/>
      
      </div>
  );
}

export default App;
