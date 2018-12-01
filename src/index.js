import React from 'react';
import ReactDOM from 'react-dom';

import './css/bootstrap.css';
import './css/index.css';

import App from './app/App';


import * as serviceWorker from './app/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
