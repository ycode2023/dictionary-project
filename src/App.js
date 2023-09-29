import logo from './logo.png';
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
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Yalda Keshavarzi</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
