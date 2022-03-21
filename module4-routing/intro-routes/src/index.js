import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Posts from './components/Posts';
import Post from './components/Post';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="posts" element={<Posts />}>
            <Route path=":slug" element={<Post />} />
          </Route>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
