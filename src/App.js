import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [name, setName] = useState("");
  const title ="Welcome to the new blog";
  const like = Math.floor(Math.random() * 100);
  const link = "https://www.Google.it";

  const handleClick = () => {
    setName("");
  }

  const handleClickAgain = (oldName) => {
    setName(oldName);
    console.log(`Hello ${oldName}`);
  }

  
  return (
  
    <div className="App">
      <div className="content">

        <h1>{  title } </h1>
        <p> Liked { like } times </p>
        
        <a href = { link } style = {{ color: "black", backgroundColor: "yellow" }} > Google Site </a>

        <div className = "prova" style={{ position: "relative" }}> 
          <button onClick = { handleClick } style = {{ 
            position: "absolute", 
            top:"50%", 
            left:"50%", 
            transform: "translate(-50%, -50%)", 
            marginTop:"50px" }}> Click me 
          </button>

          <button onClick = { () => { handleClickAgain('Romy') }} style = {{ 
            position: "absolute", 
            top:"50%", 
            left:"50%", 
            transform: "translate(-50%, -50%)", 
            marginTop:"100px" }}> Click me again
          </button>
          
          {/* condizione ? true : false */}
          {/* { name === "" ? null : <p> Old name { name } </p> } */}

          { name && <p> Old name { name } </p> }

        </div>

      
      </div>
    </div>
  );
}

export default App;
