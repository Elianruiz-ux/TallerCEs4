/* eslint-disable react/prop-types */

const TodoList = ({ todos, setTodos, setEdit }) => {
  const deleteTodo = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>nombre</th>
            <th>cantidad</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.nombre}</td>
              <td>
                <span
                  style={
                    todo.tipoMovimiento == "Gasto"
                      ? { backgroundColor: "#ff0000" }
                      : { backgroundColor: "#389601" }
                  }
                >
                  {todo.cantidad}
                </span>
              </td>
              <td>
                <button onClick={() => setEdit(todo)}>Editar</button>
              </td>
              <td>
                <button onClick={() => deleteTodo(todo)}>eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
