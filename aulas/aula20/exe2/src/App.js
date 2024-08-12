import './App.css';
import InputT from './components/componente1';
import InputP from './components/componente2';
import Button from './components/componente3';

function App() {
  return (
    <div className="container">
      <div className="container2">
        <h1>Login</h1>
        <div className="container3">
          <h2>Username</h2>
            <InputT/>
          <h2>Password</h2>
            <InputP className="input"/>
        </div>
        <Button className="botao"/>
      </div>
    </div>
  );
}

export default App;
