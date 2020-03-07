import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  // return <CounterContainer />
  return (
    <>
      <TodoInsert />
      <TodoList />
    </>
  )
}

export default App;
