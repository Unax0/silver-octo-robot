import React from "react";
import ReactDOM from 'react-dom/client';

const element = (
  <div>
    <h1>My ToDo List</h1>
    <input placeholder="search" />
    <ul>
      <li>Install React</li>
      <li>Study React</li>
      <li>Use React</li>
      <li>Build React App</li>
    </ul>
  </div>
);
console.log('Hello, Slava');

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root DOM element
root.render(element); // Render the element into the root