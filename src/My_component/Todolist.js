import React from 'react'

export const Todolist = (props) => {
  return (
   <>
    <h3>{props.todo1}</h3>
    <h4>{props.todo2}</h4>
    <p>{props.todo3}</p>
   <button className='btn btn-sm btn-danger' onClick={ 
     
     ()=>{
        props.deleteitem(props.todo1,props.todo2,props.todo3)
     }
     
    
  
  }>Delete</button>
<hr/>
  </>
    
  )
}
