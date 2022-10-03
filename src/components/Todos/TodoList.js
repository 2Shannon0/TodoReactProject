import styles from "./TodoList.module.css";
import Todo from "./Todo";

function TodoList(props) {
  const { todos, deleteTodo, togleTodo } = props;

  return (
    <div className={styles.todoListConteiner}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          togleTodo={togleTodo}
        />
      ))}
    </div>
  );
}
export default TodoList;
