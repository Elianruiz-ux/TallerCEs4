/* eslint-disable react/prop-types */
import { useEffect } from "react";
import style from "./Form.module.css";
import uuid4 from "uuid4";
const Form = ({
  nombre,
  setNombre,
  todos,
  setTodos,
  edit,
  setEdit,
  setCantidad,
  cantidad,
  tipoMovimiento,
  setTipoMovimiento,
}) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      editTodo(edit);
    } else {
      const newTodo = {
        id: uuid4(),
        nombre: nombre,
        cantidad: cantidad,
        tipoMovimiento: tipoMovimiento,
      };
      setTodos([...todos, newTodo]);
      setNombre("");
      setCantidad("");
      setTipoMovimiento("");
    }
  };

  const editTodo = (todo) => {
    const newTodos = todos.map((item) =>
      item.id === todo.id
        ? {
            ...todo,
            nombre: nombre,
            cantidad: cantidad,
            tipoMovimiento: tipoMovimiento,
          }
        : item
    );
    setTodos(newTodos);
    setEdit(null);
  };

  useEffect(() => {
    if (edit) {
      setNombre(edit.nombre);
      setTipoMovimiento(edit.tipoMovimiento);
      setCantidad(edit.cantidad);
    } else {
      setNombre("");
      setCantidad("");
      setTipoMovimiento("");
    }
  }, [edit]);

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        placeholder="Enter nombre"
        className={style.taskInput}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter cantidad"
        className={style.taskInput}
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />

      <select
        className={style.taskInput}
        value={tipoMovimiento}
        onChange={(e) => setTipoMovimiento(e.target.value)}
      >
        <option value="Ingreso" defaultValue="Ingreso">
          Ingreso
        </option>
        <option value="Gasto">Gasto</option>
      </select>

      <button type="submit" className={style.button}>
        {edit ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default Form;
