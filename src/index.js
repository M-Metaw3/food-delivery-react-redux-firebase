import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import store from './store/Store';
import mmm from './store/Store'
import "bootstrap/dist/css/bootstrap.min.css";
 import "remixicon/fonts/remixicon.css";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   <Provider store={store}  >

    <Router>
    <App />
    </Router>
    </Provider>

  </React.StrictMode>
);
