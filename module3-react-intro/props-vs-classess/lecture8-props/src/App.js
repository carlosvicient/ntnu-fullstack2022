import './App.css';
import WelcomeF from './components/WelcomeF';
import WelcomeC from './components/WelcomeC';

import WelcomeCDefaultA from './components/WelcomeCDefaultA';
import WelcomeCDefaultB from './components/WelcomeCDefaultB';

import WelcomeFDefaultA from './components/WelcomeFDefaultA';
import WelcomeFDefaultB from './components/WelcomeFDefaultB';
import WelcomeFDefaultC from './components/WelcomeFDefaultC';


function App() {
  return (
    <div className="App">
      <h1>Props vs state</h1>
      <p>Let's use this project to play with components and learn the differences between props and state</p>

      <h2>Only props</h2>

      <p>Some examples only using props.</p>

      <h3>"WelcomeF" function component with no props</h3>
      <WelcomeF />

      <h3>"WelcomeF" function component with name="John Doe"</h3>
      <WelcomeF name="John Doe" />

      <h3>"WelcomeF" function component with name={23}</h3>
      <WelcomeF name={23} />

      <h3>"WelcomeC" function component with no props</h3>
      <WelcomeC />

      <h3>"WelcomeC" function component with name="John Doe"</h3>
      <WelcomeC name="John Doe" />

      <h3>"WelcomeC" function component with name={23}</h3>
      <WelcomeC name={23} />

      <hr />
      <h2>Examples using props or default props</h2>

      <p>
        The following examples show how to define default values for the props.
        The examples implement different versions using both functional components and class components.
      </p>

      <h3>WelcomeCDefaultA - class component version 1</h3>
      <p>
        We use 'WelcomeCDefaultA'. Class component. 
        Defining defaultProps on the component class (outside the body class).
        prop.name not defined (default value)
      </p>
      <WelcomeCDefaultA />

      <p>
        Same example but now name="carlos".
      </p>
      <WelcomeCDefaultA name='Carlos'/>

      <h3>WelcomeCDefaultB - class component version 2</h3>
      <p>
        We use 'WelcomeCDefaultB'. Class component. 
        Defining defaultProps using static class properties (ECMAScript specification).
        prop.name not defined (default value)
      </p>
      <WelcomeCDefaultB />

      <h3>WelcomeFDefaultA - functional component version 1</h3>
      <p>
        We use 'WelcomeFDefaultA'. Functional component. 
        Setting default props by adding a static property named defaultProps to the component function.
        prop.name not defined (default value)
      </p>
      <WelcomeFDefaultA />

      <p>
        Same example but now name="carlos".
      </p>
      <WelcomeFDefaultA name='Carlos'/>

      <h3>WelcomeFDefaultB - functional component version 2</h3>
      <p>
        We use 'WelcomeFDefaultB'. Functional component. 
        Defining default values using ES6 object destructuring syntax "as a variable"
        prop.name not defined (default value)
      </p>
      <WelcomeFDefaultB />

      <p>
        Same example but now name="keys".
      </p>
      <WelcomeFDefaultB name='keys'/>

      <h3>WelcomeFDefaultC - functional component version 3</h3>
      <p>
        Same as previous version (WelcomeFDefaultB) but destructuring in the argument.
        We use 'WelcomeFDefaultC'. Functional component. 
        Defining default values using ES6 object destructuring syntax "compact version in props argument"
        prop.name not defined (default value)
      </p>
      <WelcomeFDefaultC />

      <p>
        Same example but now name="world".
      </p>
      <WelcomeFDefaultC name='world'/>

      <p>
        Same example but now name=23.
      </p>
      <WelcomeFDefaultC name={23}/>


    </div>
  );
}

export default App;
