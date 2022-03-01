import AwesomeList from './components/AwesomeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Complex data types (The AwesomeList solution)</h1>
      </header>
      <div id="container">
        <h2>The <code>{'<AwesomeList />'}</code> - default values</h2>

        <p>
          This is the final version of the <code>{'<AwesomeList />'}</code>
          using the default values. This is, all the controls and the default list.
          The component can add/edit and delete elements.
        </p>

        <AwesomeList />

        <h2>The <code>{'<AwesomeList />'}</code> - custom controls</h2>

        <p>
          Same version as before but now with custom controls (only clear, reset and add elements manually). 
          The list is customised and it will show "JS", "TS" and "React".
        </p>

        <AwesomeList controls={['clear', 'reset']} list={['JS', 'TS', 'React']} />
      </div>
    </div>
  );
}

export default App;