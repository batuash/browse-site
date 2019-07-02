import React from 'react';
import {render} from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './styles/style.css';
import {
  App,
  Topics,
  Archives,
  Pages,
  SomePage,
  SomeOtherPage
} from './components';

const store = configureStore();

const routing = (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/topics" component={Topics} />
      <Route path="/archives" component={Archives} />
      <Route path="/pages" component={Pages} />
      <Route path="/somepage" component={SomePage} />
      <Route path="/someotherpage" component={SomeOtherPage} />
    </Router>
  </Provider>
);

render(routing, document.getElementById('root'));
