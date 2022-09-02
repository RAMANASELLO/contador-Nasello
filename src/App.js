
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer pepe="mundo"/>
      </header>
    </div>
  );
}

export default App;
