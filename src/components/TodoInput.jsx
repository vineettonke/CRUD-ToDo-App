/*export default function TodoInput(props){
    const{ handleAddTodos } = props
    const[todoValue, setTodoValue] = useState('')
    return(
        <header>
            <input value={todoValue} onChange{(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter ToDo...."/>
            <button onClick={() => {
                handleAddTodos(todoValue)
            }}>Add</button>
        </header>
    )
}*/

// import PropTypes from 'prop-types';


// export default function TodoInput(props) {
//   const { handleAddTodos, todoValue, setTodoValue} = props;

  

//   const handleInputChange = (e) => {
//     setTodoValue(e.target.value);
//   };

//   const handleAddTodo = () => {
//     handleAddTodos(todoValue);
//     setTodoValue(''); // reset the input value after adding the todo
//   };

//   return (
//     <header>
//       <input
//         value={todoValue}
//         onChange={handleInputChange}
//         placeholder="Enter ToDo...."
//       />
//       <button onClick={handleAddTodo}>Add</button>
//     </header>
//   );
// }

// TodoInput.propTypes = {
//   handleAddTodos: PropTypes.func.isRequired,
// };

import PropTypes from 'prop-types';

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  const handleInputChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoValue.trim() !== '') { // add a check to prevent adding empty todos
      handleAddTodos(todoValue);
      setTodoValue(''); // reset the input value after adding the todo
    }
  };

  return (
    <header>
      <input
        value={todoValue}
        onChange={handleInputChange}
        placeholder="Enter ToDo...."
      />
      <button onClick={handleAddTodo}>Add</button>
    </header>
  );
}

TodoInput.propTypes = {
  handleAddTodos: PropTypes.func.isRequired,
  todoValue: PropTypes.string.isRequired,
  setTodoValue: PropTypes.func.isRequired,
};