import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './components/Post';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/post/:postId" component={Post} />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
