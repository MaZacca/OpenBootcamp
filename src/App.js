import logo from './logo.svg';
//import './App.css';
import AComponent from './components/AComponent';
import Clock from './Ejercicios 4,5,6/ClassClock';
import FunctionalClock from './Ejercicios 4,5,6/FunctionalClock';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AComponent/>
      </header> */}
      <Clock/>
      <FunctionalClock/>
    </div>
  );
}

export default App;
