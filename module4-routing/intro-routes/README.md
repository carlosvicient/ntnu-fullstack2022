# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

* `yarn start`
* `yarn test`
* `yarn build`
* `yarn eject`

# Steps to replicate (IDG2100 routing)

- Refactor code

`App.js`
````jsx
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li> <a href="home">Home</a></li>
            <li> <a href="posts">Posts</a></li>
          </ul>
        </nav>
      </header>
      <main>
        I am the main app!
      </main>
    </div>
  );
}

export default App;
````

`App.css`
````css
.App {
  text-align: center;
  font-size: 18px;
}

.App-header {
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 100%;
}

.App-header nav {
  width: 100%;
}

.App-header ul {
  list-style: none;
  display: flex;
}

.App-header ul li {
  padding: .5em;
}

.App-header a {
  color: #61dafb;
}

a {
  color: #282c34;
}
````

- Install router `yarn add react-router-dom@6`

- Import `BrowserRouter` and render it around `index.js`

````jsx
import { BrowserRouter } from "react-router-dom";
...
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
````

- Import `Routes` and `Route` and define your routes in `index.js`

````jsx
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

...
<BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
        <Route path="posts" element={<div/>} />
    </Route>
    </Routes>
</BrowserRouter>
````

- Import `Outlet` and `Link` in `App.js`

````jsx
import { Outlet, Link } from "react-router-dom";
````

- Replace the anchor elements by `Link` components and add the `outlet` where nested views will be rendered

````jsx
<header className="App-header">
    <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/posts">Posts</Link>
        </li>
        </ul>
    </nav>
</header>
<main>
    <Outlet />
</main>
````

- Create `components` folder and create `Posts` component

````jsx
const Posts = (props) => {
    return (
        <ul>
            <li>Post 1</li>
            <li>Post 2</li>
            <li>Post 3</li>
        </ul>
    );
}
export default Posts;
````

- Import new component in `index.js` and use it in Post route

````jsx
import Posts from './components/Posts';
...
<Route path="posts" element={<Posts/>} />
````

- Add a "no match" route in `index.js`

````jsx
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="posts" element={<Posts />} />
          <Route
            path="*"
            element={
              <p><code>404</code> Page not found!</p>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
````

- what happens if you load home? It is empty. Let's add a default "index" route...

```jsx
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="posts" element={<Posts />} />
          <Route
            index
            element={
              <p>Welcome to my App! Enjoy...</p>
            }
          />
          <Route
            path="*"
            element={
              <p><code>404</code> Page not found!</p>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Trying query params... 

- create `src/data.js` to emulate a backend...

````js
let posts = [
    {
        title: "Using query params with react router",
        postedAt: "15/03/2022",
        slug: "query-params",
        author: "Carlos"
    },
    {
        title: "Intro to react router v6",
        postedAt: "15/03/2022",
        slug: "routes-intro",
        author: "Carlos"
    },
    {
        title: "Intro to nodejs",
        postedAt: "15/02/2022",
        slug: "nodejs",
        author: "Carlos"
    },
    {
        title: "Intro to React",
        postedAt: "12/01/2022",
        slug: "react",
        author: "Carlos"
    },
];

export function getPosts() {
    return posts;
}
````

- Edit `Posts` to render list of posts dynamically. Each post will link to `/posts/{slug}`

````jsx
import { Link } from "react-router-dom";
import { getPosts } from "../data";

const Posts = (props) => {
    let posts = getPosts();

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link to={`/posts/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}            
            </ul>
        </div>
    );
}

export default Posts;
````

- create a `Post` component that will render a specific post

````jsx
const Post = () => {
    return ( 
        <article style={{maxWidth: "70ch", margin: "0 auto"}}>
            <h2 style={{fontSize: "2.5em", marginBottom: ".1em"}}>post.title</h2>
            <h3 style={{fontSize: ".9em", marginTop: "0px"}}>
                <span>post.author</span>
                {' '}
                <span>post.postedAt</span>
            </h3>
        </article>
     );
}
 
export default Post;
````

- Add a new route in `index.js` using the query params. Decide where the route will be rendered depending on your goal (as a child of `/` or as a child of `/posts`) 

````jsx
<Route path="/" element={<App />}>
    <Route path="posts" element={<Posts />} />
    {/* if we want to render posts and post in the same view 
    we can nest the routes and add an outlet to posts*/}
    <Route path="posts/:slug" element={<Post />} />
    <Route
        index
        element={
            <p>Welcome to my App! Enjoy...</p>
        }
    />
    <Route
        path="*"
        element={
            <p><code>404</code> Page not found!</p>
        }
    />
</Route>
````

- Finally, the `Post` component will read the `:slug` parameter  and "fetch" the post we want to render

    - Modify `data.js` to add a "search" function

    ````js
    export function findPost(slug){
        return posts.find((post) => {
            return post.slug === slug
        });
    }
    ````

    - Read the query param and render the post

    ````jsx
    import { useParams } from "react-router-dom";
    import { findPost } from "../data";

    const Post = () => {
        let params = useParams();
        let post = findPost(params.slug);

        return ( 
            <article>
                <h2 style={{fontSize: "1.2em", marginBottom: ".5em"}}>{post.title}</h2>
                <h3 style={{fontSize: "0.8em", marginTop: "0px"}}>
                    <span>{post.author}</span>
                    <span>{post.postedAt}</span>
                </h3>
            </article>
        );
    }
    
    export default Post;
    ````

    - Improve the post model: add body into the data model and render the body in the post

    ````js
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ````

    ````jsx
    import { useParams } from "react-router-dom";
    import { findPost } from "../data";


    const Post = () => {
        let params = useParams();
        let post = findPost(params.slug);

        return ( 
            <article>
                <h2 style={{fontSize: "1.2em", marginBottom: ".5em"}}>{post.title}</h2>
                <h3 style={{fontSize: "0.8em", marginTop: "0px"}}>
                    <span>{post.author}</span>
                    <span>{post.postedAt}</span>
                </h3>
                <p>{post.body}</p>
            </article>
        );
    }
    
    export default Post;
    ````

    - Make sure routes with slugs that do not exist render a proper output

    ````jsx
    if (!post) {
        return (
            <article style={{ maxWidth: "70ch", margin: "0 auto" }}>
                <p>The post "{params.slug}" no longer exists</p>
            </article>
        )
    }
    ````