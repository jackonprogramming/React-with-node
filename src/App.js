import logo from "./logo.svg";
import "./App.css";
import Testing from "./Components/example";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Testing />
      </header>
    </div>
  );
}

export default App;
