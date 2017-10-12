import React from 'react';
import ReactDOM from 'react-dom';
// import '../node_modules/react-md/dist/react-md.teal-purple.min.css';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
