import React from "react";
import ReactDOM from 'react-dom/client';

const ToDoList= () => {
  return (
    <ul>
      <li>Install React</li>
      <li>Study React</li>
      <li>Use React</li>
      <li>Build React App</li>
    </ul>
  );
};
const AppHeader = () => {
  return <h1>My ToDo List</h1>
};
const SearchPanel = () => {
  return <input placeholder="search"/>
};
const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <ToDoList/>
    </div>
  );
};

// const element = <App/>

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root DOM element
root.render(<App/>); // Render the element into the root