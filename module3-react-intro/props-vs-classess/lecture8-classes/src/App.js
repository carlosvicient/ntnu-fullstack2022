import './App.css';
import MyButton from './components/MyButton';
import ThemeSwitch from './components/ThemeSwitch';
import RandomList from './components/RandomList';

function App() {
  return (
    <div className="App">
      <header>
        <ThemeSwitch />
      </header>
      <h1>Some examples using the state...</h1>

      <h2>MyButton component...</h2>
      <p>First example: a button that keeps track of number of clicks...</p>
      <MyButton />

      <h2>RandomList (yet another version)</h2>
      <RandomList />
    </div>
  );
}

export default App;
