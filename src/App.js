import { useState, useEffect} from 'react';
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

  const deleteBlog = (id) => {
    const newBlog = blogs.filter( (blog => blog.id !== id));
    setBlog(newBlog);
  }


  // UseEffect

  


  return (
  
    <div className="App">
      <div className="content">

        <h1>{  title } </h1>
        <p> Liked { like } times </p>
        
        <a href = { link } style = {{ color: "black", backgroundColor: "yellow" }} > Google Site </a>

        <div className="home" style= {{ display: "flex", marginTop:"50px"}}> 

          <div class="first_list" style= {{ width:"50%" }}>
            
            <BlogList blogs= { blogs } deleteBlog= { deleteBlog }> </BlogList>

          </div>

          <div class="second_list" style= {{ width:"50%" }}>
            
            <BlogList blogs= { blogs.filter ( (blog) => blog.author === "mario" ) }> </BlogList>

          </div>


          
        </div>

        <div className = "buttons" style= {{ 
          display: "flex",
          justifyContent:"space-around",
          alignItems: "center",
          width: "100%",
          marginTop: "80px" }} > 
          
          <button onClick = { handleClick }> Click me </button>

          <button onClick = { () => { handleClickAgain('') }} > Click me again </button>

          
          
          {/* condizione ? true : false */}
          {/* { name === "" ? null : <p> Old name { name } </p> } */}

          {/* Rendering conditional */}
          { name && <p> Old name { name } </p> }


        </div>

      
      </div>
    </div>
  );
}

export default App;
