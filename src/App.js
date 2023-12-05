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
  }
  const addTodo = (title,desc) => {
    console.log("I am adding todo",title,desc)
    let sno = todos[todos.length-1].sno + 1;
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done" 
    },
    {
      sno:2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done2" 
    },
    {
      sno:3,
      title: "Go to the ghat",
      desc: "You need to go to the ghat to get this job done3" 
    }
  ]);
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
