import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './components/Post';
import registerServiceWorker from './registerServiceWorker';


// import react-router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Set Routes
// posts/:postId has a placeholder, will be replaced with specific post ids in Posts.js
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/post/:postId" component={Post} />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
