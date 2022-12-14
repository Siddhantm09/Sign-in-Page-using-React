import React,{useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from'./Login'
import {Register} from "./Register"


function App() {
const [currentForm,SetcurrentForm]=useState('Login');

const toggleForm=(formName)=>{
SetcurrentForm(formName)
}


  return (
    <div className="App">
      {
        currentForm==='Login'? <Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
      }
      
    </div>
  );
}

export default App;
