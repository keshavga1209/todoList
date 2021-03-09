import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, setTodo, filterTodo}) =>{
    //console.log(todos);
    return(
        <div className = "todo-container">
            <ul className = "todo-list">
                {filterTodo.map(todo=>(
                            <Todo setTodo={setTodo}
                             key ={todo.id} text = {todo.text}
                            todos = {todos} 
                            todo = {todo}/>
                        )
                    )
                }
            </ul>
            {/* <Todo/> */}

        </div>
    );
};

export default TodoList;