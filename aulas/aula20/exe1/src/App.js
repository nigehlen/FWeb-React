import './App.css';
import Welcome from './components/componente1';
import Idade from './components/componente2';
import Input from './components/componente3';
import './components/ ';

function App() {
  return (
    <div className="container">
      <Welcome name="Nicoli"/>
      <Idade idade='18'/>
      <form>
        <Input />
      </form>
    </div>
  );
}

export default App;
