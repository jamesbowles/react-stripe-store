import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Sentry from '@sentry/browser';
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: `${process.env.REACT_APP_SENTRY_API_KEY}`
  });
}
// uncomment if you would like to serve the final site with service workers
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
