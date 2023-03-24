import { useState, useEffect} from 'react';
import './App.css';
import BlogList from './blogList';
import { fetchData } from './utils';

function App() {
  
  // UseState variables
  const [name, setName] = useState("");
  const [blogs, setBlog] = useState([

    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }

  ]);

  const [isPending, setIsPending] = useState(true);
  

  // Non reactive variables
  const title ="Welcome to the new blog";
  const like = Math.floor(Math.random() * 100);
  const link = "https://www.Google.it";
  const author = ["Parigi", "mario", "Giuseppina", "Anonymous", ""];


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
  useEffect(() => {

    fetchData(author, setBlog, setIsPending);

  }, []);


  return (
  
    <div className="App">
      <div className="content">

        <h1> { title } </h1>
        <p> Liked { like } times </p>
        
        <a href = { link } style = {{ color: "black", backgroundColor: "yellow" }} > Google Site </a>

        <div className='home divano' style= {{ display: "flex", marginTop:"50px" }}> 

          <div className="first_list" style= {{ width:"50%" }}>

            { isPending && <div> Data are loading </div> }
            <BlogList blogs= { blogs } deleteBlog= { deleteBlog }> </BlogList>

          </div>

          <div className="second_list" style= {{ width:"50%" }}>
            
            { isPending && <div> Data are loading </div> }
            <BlogList blogs= { blogs.filter ( (blog) => blog.author === "mario" ) }  deleteBlog= { deleteBlog }> </BlogList>

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
