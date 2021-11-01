import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

import ToDoCard from "./components/ToDoCard";
import AddTodoForm from "./components/AddTodoForm";
import EditTodoForm from "./components/EditTodoForm";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [currentTodo, setCurrentTodo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleCheckTodo = (todoId) => {
    let newTodos = [...todos];
    const completedTodo = newTodos.find((x) => x.id === todoId);
    completedTodo.checked = !completedTodo.checked;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (todoId) => {
    let newTodos = [...todos];
    const filteredTodos = newTodos.filter((t) => t.id !== todoId);
    setTodos(filteredTodos);
  };

  const isFormValid = (todo, date) => {
    if (todo === "") {
      setErrorMsg("Please add to do");
      return false;
    } else if (date === "") {
      setErrorMsg("Please add date");
      return false;
    } else {
      setErrorMsg("");
      return true;
    }
  };

  const handleEditTodo = (editedTodo) => {
    setIsEditing(true);
    setCurrentTodo({ ...editedTodo });
  };

  return (
    <Container>
      {isEditing ? (
        <EditTodoForm
          setTodos={setTodos}
          todos={todos}
          errorMsg={errorMsg}
          setIsEditing={setIsEditing}
          setCurrentTodo={setCurrentTodo}
          currentTodo={currentTodo}
        />
      ) : (
        <AddTodoForm
          setTodos={setTodos}
          todos={todos}
          isFormValid={isFormValid}
          errorMsg={errorMsg}
        />
      )}
      <ul className="listWrapper">
        {todos.map((todo) => (
          <ToDoCard
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            handleCheckTodo={handleCheckTodo}
          />
        ))}
      </ul>
    </Container>
  );
}
