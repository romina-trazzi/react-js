import logo from './logo.svg';
import './App.css';

function App() {
  const title ="Welcome to the new blog";
  const like = Math.floor(Math.random() * 100);
  const link = "https://www.Google.it";

  return (
  
    <div className="App">
      <div className="content">

        <h1>{ title }</h1>
        <p> Liked { like } times </p>
        
        <a href = { link } style = {{ color: "black", backgroundColor: "yellow" }} > Google Site </a>

      
      </div>
    </div>
  );
}

export default App;
