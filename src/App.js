import { useState } from 'react';
import './App.css';
import './blogList';
import BlogList from './blogList';

function App() {
  
  // UseState variables
  const [name, setName] = useState("");
  const [blogs, setBlog] = useState([

    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }

  ]);
  

  // Non reactive variables
  const title ="Welcome to the new blog";
  const like = Math.floor(Math.random() * 100);
  const link = "https://www.Google.it";


  // Functions 
  const handleClick = () => {
    setName("");
  }

  const handleClickAgain = (oldName) => {
    oldName = prompt("Caro utente inserisci un nome");
    setName(oldName);
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
            marginTop:"200px" }}> Click me 
          </button>

          <button onClick = { () => { handleClickAgain('') }} style = {{ 
            position: "absolute", 
            top:"50%", 
            left:"50%", 
            transform: "translate(-50%, -50%)", 
            marginTop:"300px" }}> Click me again
          </button>
          
          {/* condizione ? true : false */}
          {/* { name === "" ? null : <p> Old name { name } </p> } */}

          {/* Rendering conditional */}
          { name && <p> Old name { name } </p> }

          <div className="home"> 

            <BlogList blogs={ blogs }> </BlogList>
          
          </div>

        </div>

      
      </div>
    </div>
  );
}

export default App;
