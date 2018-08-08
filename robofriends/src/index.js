import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './Hello';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello greeting={`Hello, Crazy Dude!`}/>, document.getElementById('root'));
registerServiceWorker();
