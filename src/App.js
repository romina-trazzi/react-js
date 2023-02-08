import logo from './logo.svg';
import './App.css';

function App() {
  const title ="Welcome to the new blog";
  const like = Math.floor(Math.random() * 100);
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p> Liked { like } times </p>
      </div>
    </div>
  );
}

export default App;
