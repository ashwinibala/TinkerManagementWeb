import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Collapse, Ripple, initTE } from 'tw-elements';

initTE({ Collapse, Ripple });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);