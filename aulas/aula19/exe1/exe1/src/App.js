import logo from './logo.svg';
import './App.css';
import Welcome from './componente1';
import Texto from './componente2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Bem vindo ao react!</p>
          <Welcome name= "Nicoli" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Texto exemplo= "Exemplo de app" />
      </header>
    </div>
  );
}

export default App;
