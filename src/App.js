import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <div className="me">
          Coded By{" "}
          <a href="https://github.com/JessKco/dictionary.project">
            Jess Corbett
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
