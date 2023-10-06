import { useState } from "react";
import style from "./App.module.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  const [tipoMovimiento, setTipoMovimiento] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  console.log(todos);

  return (
    <div className={style.container}>
      <div className={style.appwrapper}>
        <div>
          <Header />
        </div>
        <div>
          <Form
            nombre={nombre}
            setNombre={setNombre}
            setTipoMovimiento={setTipoMovimiento}
            tipoMovimiento={tipoMovimiento}
            cantidad={cantidad}
            setCantidad={setCantidad}
            todos={todos}
            setTodos={setTodos}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
        </div>
      </div>
    </div>
  );
};

export default App;
