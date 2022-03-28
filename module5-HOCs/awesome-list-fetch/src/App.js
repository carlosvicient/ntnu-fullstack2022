import AwesomeListFetch from './components/AwesomeListFetch';
import withUsersFetch from './components/hoc/UsersListHOC';
import AwesomeList from './components/AwesomeList';
import List from './components/List';
import './App.css';
import UserCarousel from './components/UserCarousel';
import withUsersExtendedFetch from './components/hoc/UsersExtendedListHOC';

function App() {
  const url = 'https://randomuser.me/api/?results=10';
  const AwesomeListWithUsers = withUsersFetch(AwesomeList, url);
  const ListWithUsers = withUsersFetch(List, url);
  const CarouselWithFetch = withUsersExtendedFetch(UserCarousel, url);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetching data with react</h1>
      </header>
      <div id="container">
        <p>
          There are several ways of fetching data with react. Here, we discuss some of them.
          We will work with a copy of the <code>{'<AwesomeList />'}</code> implemented in previous sessions.
          We will use the <a href="https://randomuser.me/api/?results=10" target="_blank" rel="noreferrer">randomuser.me API</a>for fetching random users.
        </p>

        <h2>Built-in Fetch API</h2>

        <p>We fetch data using the fetch API (JS) inside componentDidMount lifecycle method</p>

        <AwesomeListFetch controls={[]} list={[]} fetchFrom={url} />

        <p>
          The main problem of this solution is that even when you define the API via props ("fetchFrom"),
          the component is in charge of (a) more than one task, this is, fetch and render list (no SOLID principle) and
          (b) the answers from the API must have the same format (not reusable).
        </p>

        <h2>Higher Order Components (HOC)</h2>

        <p>
          <a href="https://reactjs.org/docs/composition-vs-inheritance.html#gatsby-focus-wrapper" target="_blank" rel="noreferrer">Reactjs documentation</a> 
          suggests using 'props' and 'composition' to customise a component's look and behaviour
          in an explicit and safe way instead of creating a component inheritance hierarchy. They also recommend
          <a href="https://reactjs.org/docs/higher-order-components.html" target="_blank" rel="noreferrer">Higher-Order Components</a>
          for reusing components logic.
        </p>

        <AwesomeListWithUsers controls={['reset']}/>

        <p>The HOC function woul also work with any component that expects to receive a list prop that contains an array of strings</p>
        <ListWithUsers/>

        <h2>Lab activity: a new HOC (solution)</h2>
        <p>Example showing how the new HOC can be used to feed users into a carousel</p>
        <CarouselWithFetch />
      </div>
    </div>
  );
}

export default App;