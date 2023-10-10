import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The speed of trust - delivered</p>
        <a
          className="App-link"
          href="https://www.facebook.com/trustsolute.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustsolute Solutions Tech.
        </a>
      </header>
    </div>
  );
}

export default App;
