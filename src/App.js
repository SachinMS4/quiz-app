import "./App.css";

import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <nav className="app-container">
        <Nav />
      </nav>
    </div>
  );
}

export default App;
