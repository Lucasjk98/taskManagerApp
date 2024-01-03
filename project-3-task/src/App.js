import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/form.js'
import TodoList from './components/TodoList';
import {Link, Switch, Route, Routes} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);


  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted': 
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }


   const getLocalTodos = () => {
     if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
   };

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/contact">Contact</Link></li>
        </ul>
      </nav>
    <header>
     <h1>Todo List</h1>
    </header>
    <Form 
    setStatus = {setStatus} 
    inputText = {inputText} 
    todos = {todos} 
    setTodos = {setTodos}
    setInputText = {setInputText}
    />
    <TodoList setTodos = {setTodos} todos={todos} filteredTodos = {filteredTodos}/>
    </div>
  );
};

export default App;
