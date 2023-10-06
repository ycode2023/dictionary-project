import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Earth" />
        </main>
        <footer className="App-footer">
          <small className="name">
            Coded by Yalda Keshavarzi &{" "}
            <a href="https://github.com/ycode2023/dictionary-project" target='_blank'>
              {" "}
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
