import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/Todolist';


function App() {

  //useEffect
  // useEffect(()=>{console.log('hey')}, [todos]);
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);

  // useEffect(()=>{console.log('hey')}, [todos]);

  //functions
  useEffect(()=>{
    getLocalTodos();
  }, []);
  useEffect(() => {filterHandler();
                   saveLocalTodos();
                  }, [todos,status]);


const filterHandler = () => {
  switch(status){
    case 'completed':
      setFilterTodo(todos.filter(todo=> todo.completed===true))
      break;
    case 'uncompleted':
      setFilterTodo(todos.filter(todo=> todo.completed===false))
      break;
    default:
      setFilterTodo(todos);
      break;
  }
}

  // console.log(filterTodo);
  const saveLocalTodos = ()=>{
    
      localStorage.setItem('todos', JSON.stringify(todos));
    
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      //let todoLocal = localStorage.getItem('todos', JSON.stringify(todos));
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodo(todoLocal);
    }
  }

  return (
    <div className="App">
      <header> 
        <h1 className="head">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          My ToDo List</h1>
      </header>
      <Form inputText={inputText }todos = {todos} setTodo = {setTodo} setInputText = {setInputText} setStatus ={setStatus}  />
      <TodoList todos = {todos} setTodo={setTodo} filterTodo= {filterTodo}/>
    </div>
  );
}

export default App;
