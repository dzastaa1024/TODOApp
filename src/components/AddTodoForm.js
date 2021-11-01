import { useState } from "react";
import { Button, Input, Form, Message } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { v4 as uuidv4 } from "uuid";

const AddTodoForm = ({ setTodos, todos, isFormValid, errorMsg }) => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (isFormValid(todo, date)) {
      const newToDo = {
        id: uuidv4(),
        description: todo,
        dueTo: date,
        checked: false,
      };

      setTodos([...todos, newToDo]);
      setTodo("");
      setDate("");
    }
  };

  const handleDateChange = (event, data) => setDate(data.value);

  return (
    <Form onSubmit={handleAddSubmit} error>
      <Form.Group widths="equal">
        <Input
          value={todo}
          name="todo"
          type="text"
          placeholder="Add a new todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <SemanticDatepicker onChange={handleDateChange} value={date} />
        <Button type="submit">Submit</Button>
      </Form.Group>
      {errorMsg && <Message error content={errorMsg} />}
    </Form>
  );
};
export default AddTodoForm;
