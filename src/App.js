import logo from './logo.svg';
import './App.css';
import Header from './My_component/Header';
import { Todos } from './My_component/Todos';
import { Todolist } from './My_component/Todolist';
import { Footer } from './My_component/Footer';

import { Ab } from './My_component/Ab';

import { useState ,useEffect} from 'react'

// import react, {useState} from react;

// import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";




function App() {


  if(localStorage.getItem("it")===null)
  {
    localStorage.setItem("it",JSON.stringify(1) );
  }
    console.log(JSON.parse(localStorage.getItem("it")))

let inittodo;

if(localStorage.getItem("ltodos")===null)
{
  inittodo=[]
}
else
{
  inittodo=JSON.parse( localStorage.getItem("ltodos"))
}

  const deleteitem = (todo1, todo2, todo3) => {


    let todo = {
      sno: todo1,
      task: todo2,
      desc: todo3

    };
    console.log(`Hii i am delete with ${todo1}`)


    setTodos(todos.filter((e) => {
      console.log(e.sno !== todo1)
      return e.sno !== todo1

    }))

    // localStorage.setItem("ltodos",JSON.stringify(todos))


  }


  const additem = (task, desc) => {
    console.log("Add item", task, " ", desc);

    let sn;
    if(todos.length==0)
    {
      sn=1;

    }
    else{
     sn= parseInt(todos[todos.length-1].sno)+1
    }

    let obj = {
      sno:  sn,
      task: task,
      desc: desc
    };

    // todos.push(obj)
    // setTodos(todos.filter((e) => {
    //   // console.log(e.sno !== todo1)
    //   return true

    // }))

    setTodos([...todos,obj])

   

    


  }

  const [todos, setTodos] = useState(


   inittodo
  );
 useEffect(()=>{
localStorage.setItem("ltodos",JSON.stringify(todos))
    },[todos])


    
    
        
  return (
    <>
    <BrowserRouter>
<Header title="Todo List" searchbar={true}     />
    <Routes>

      <Route exact path='/'   element={  <Todos todos={todos} deleteitem={deleteitem} additem={additem} /> }/>
       
      <Route path='/about' element={<Ab/>}/>

        
    </Routes>
    
 
    




         



     
      <Footer />
    

    </BrowserRouter>

  </>


 
  );
}

export default App;


