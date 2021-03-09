import React from 'react';


const Form = ({setInputText , todos, setTodo,inputText, setStatus}) =>{

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
        //console.log(e.target);
        //console.log("Shit");
    };

    const submitTodoHandler = (e)=> {
        e.preventDefault();
        setTodo([...todos, {text: inputText, completed: false, id: Math.random()*1000}]);
        setInputText("");
    }

    const statusHandler = (e) => {
       // console.log(e);
       setStatus(e.target.value);

    }
    return (
        <form>
            <input placeholder="Your task here..." value ={inputText} onChange ={inputTextHandler} type = "text" className = "todo-input"/>
            <button onClick = {submitTodoHandler} className = "todo-button" type = "submit">
                <i className = "fas fa-plus-square"></i>
            </button>
            <div className = "select">
                <select onChange = {statusHandler} name = "todos" className = 'filter-todo'>
                    <option value = 'all'>All</option>
                    <option value = 'completed'>Done</option>
                    <option value = 'uncompleted'>Undone</option>
                </select>
            </div>
        </form>
    );
};

export default Form;