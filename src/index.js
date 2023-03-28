import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import Root from './Root';


export const store = configureStore();

ReactDOM.render(<Root store = {store} />,
    document.getElementById('root'));
registerServiceWorker();
