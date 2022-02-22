import './App.css';
import EmptyArray from './components/EmptyArray';
import DefaultArray from './components/DefaultArray';
import ClearArray from './components/ClearArray';
import DefaultArrayPush from './components/PushArray';
import ResetArray from './components/ResetArray';
import CustomList from './components/CustomList';
import AwesomeList from './components/AwesomeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Complex data types (arrays and the state)</h1>
      </header>
      <div id="container">
        <h2>Basic operations</h2>

        <p>The array is empty. Inspect the code to see and empty 'ul'</p>
        <EmptyArray />

        <p>Default array in state. The component state's is initialised from a default list</p>
        <DefaultArray />

        <p>We clear the array safely (setState empty array)</p>
        <ClearArray />

        <p>Push. Use spread operator to shallow merge list and clone to set state</p>
        <DefaultArrayPush />

        <p>Reset array. Set list to initial value</p>
        <ResetArray />

        <h2>The custom list</h2>

        <p>
          We can config this list to pass 'list' and 'controls'.
          The 'controls' will specify which buttons will be displayed with the component.
          If props are not set, default values will be config with the component.
        </p>

        <p>The following list has not config any props (default values). This is, clear, add and reset and list "apple", "pineapple", "pen".</p>
        <CustomList />

        <p>The following list has not config the controls (default values). The list is "JS", "TS", "React".</p>
        <CustomList list={['JS', 'TS', 'React']} />

        <p>The following list has only config the clear list control. The list is "JS", "TS", "React".</p>
        <CustomList list={['JS', 'TS', 'React']} controls={['clear']} />

        <p>The following list has only config the push list control. The list is "JS", "TS", "React".</p>
        <CustomList list={['JS', 'TS', 'React']} controls={['push']} />

        <p>The following list has only config the push and reset list control. The list is "JS", "TS", "React".</p>
        <CustomList list={['JS', 'TS', 'React']} controls={['push', 'reset']} />

        <p>The following list has only config the push and reset list control. The list is not set.</p>
        <CustomList controls={['push', 'reset']} />

        <h2>The <code>{'<AwesomeList />'}</code></h2>
        <p>The AwesomeList is simlar to the custom list but we can add elements manually and edit them.</p>

        <AwesomeList list={['JS', 'TS', 'React']}/>
        <p>test</p>
      </div>
    </div>
  );
}

export default App;