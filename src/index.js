import React from 'react';
import ReactDOM from 'react-dom';
// with jsx
const myFirstElement = <h1>Hello react! React is {5+5} times better with jsx</h1>

//const myFirstElement = React.createElement('h1', {}, 'I do not use jsx here');

ReactDOM.render(myFirstElement, document.getElementById('root'));