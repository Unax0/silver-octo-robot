import React from "react";
import ReactDOM from 'react-dom/client';

const ToDoList= () => {
  const items = ['Install React', 'Study React', 'Use React', 'Build React App'];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
      <li>{items[3]}</li>
    </ul>
  );
};
const AppHeader = () => {
  return <h1>My ToDo List</h1>
};
const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = { fontSize: '20px' };


  // return <input placeholder="seratch" />
  return <input 
    style = {searchStyle}
    placeholder = {searchText}
    disabled = {true} />
};
const App = () => {
  const value = '<script>alert ("")</script>';
  return (
    <div>
      { value }
      <AppHeader/>
      <SearchPanel/>
      <ToDoList/>
    </div>
  );
};

// const element = <App/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>); 