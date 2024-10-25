import React from 'react';
import ReactDOM from 'react-dom/client';
// import app from './App';
// import {a,b} from './App';
import App from "./App";
// import j from "./module";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <h1></h1>  Jsx will be used for all html tags */}
    <App/>
    <j/>
  </React.StrictMode>
);

