import logo from './logo.svg';
import './App.css';

function App() {
  const title ="Welcome to the new blog";
  const like = Math.floor(Math.random() * 100);
  const link = "https://www.Google.it";

  const handleClick = () => {
    console.log("My first React function");
  }

  return (
  
    <div className="App">
      <div className="content">

        <h1>{ title }</h1>
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
        </div>

      
      </div>
    </div>
  );
}

export default App;
