import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom';
import "./config/i18n";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)


/*
On double click, don't want to change image pic, but keep the one from a previous one-click, and just redirect to the double click pokemon details view.
Unit/integration tests
i18n
Loading/error states
andrea.olarte@densitylabs.io
githubpages
*/