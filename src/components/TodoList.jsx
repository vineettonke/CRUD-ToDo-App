/*import TodoCard from "./TodoCard"

export default function TodoList(props) {
    const{todos} = props
    return (
      <ul className='main'>
          {todos.map((todo, todoIndex)=>{
            return(
                <TodoCard key={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
          })}
      </ul>
    )
}*/


import PropTypes from 'prop-types';
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex}
          index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};