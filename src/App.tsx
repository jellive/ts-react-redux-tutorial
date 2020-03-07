import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import FolderContainer from './containers/FolderContainer';

function App() {
  // return <CounterContainer />
  return (
    <>
      {/* <TodoInsert />
      <TodoList /> */}
      <FolderContainer />
    </>
  )
}

export default App;
