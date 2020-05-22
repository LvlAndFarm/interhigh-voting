import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as arrive from "arrive";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Fix for presistent EuiOverlayMask
document.arrive(".euiOverlayMask", function() {
    // document.getElementsByClassName("euiOverlayMask").map (elem)
    if (this.getAttribute("class")==="euiOverlayMask" && this.children.length<1) {
        this.remove();
        console.log(this);
    }
});