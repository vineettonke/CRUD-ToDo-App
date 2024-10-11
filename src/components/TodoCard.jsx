/* eslint-disable react/prop-types */
//import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo} = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={() => {
          handleEditTodo(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        
        <button onClick={() => {
          handleDeleteTodo(index)
        }}>
          <i className="fa-solid fa-trash-can"></i>
          <i className="fa-regular fa-trash-can fa-shake"></i>
        </button>
      </div>
    </li>
  )
}
