import { Button, Input, Form, Message } from "semantic-ui-react";

const EditTodoForm = ({ setTodos, todos, errorMsg, setIsEditing, setCurrentTodo, currentTodo }) => {
  const handleEditSubmit = (e) => {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  };

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, description: e.target.value });
  };

  return (
    <Form onSubmit={handleEditSubmit} error>
      <Form.Group widths="equal">
        <Input
          value={currentTodo.description}
          name="todo"
          type="text"
          placeholder="Edit todo"
          onChange={handleEditInputChange}
        />
      </Form.Group>
      <Button type="submit">Update</Button>
      <Button onClick={() => setIsEditing(false)}>Cancel</Button>
      {errorMsg && <Message error content={errorMsg} />}
    </Form>
  );
};
export default EditTodoForm;
