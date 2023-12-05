import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import { useState } from 'react';
function App() {
  const onDelete =(todo) => {
     console.log("I am ondelete of todo",todo);
    
    setTodos(todos.filter((e) =>{
      return e!==todo;
    })) 
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title,desc) => {
    console.log("I am adding todo",title,desc)
    let sno;
    if(todos.length==0){
      sno = 0;
    }
      else{
         sno = todos[todos.length-1].sno + 1;
      }
    
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    
    localStorage.setItem("todos", JSON.stringify(todos));
    
    
  }
  const [todos, setTodos] = useState([]);
  return (
    <>
    <Header title="MyTodosList" searchbar={true}/>
    <AddTodo addTodo={addTodo}/> 
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
