import { Button, Checkbox, Card } from "semantic-ui-react";

const ToDoCard = ({ todo, handleCheckTodo, handleDeleteTodo, handleEditTodo }) => {
  return (
    <Card.Group key={todo.id} as="li">
      <Card>
        <Card.Content>
          <Card.Header>{todo.description}</Card.Header>
          <br />
          <Checkbox
            label="Mark as checked"
            onChange={() => handleCheckTodo(todo.id)}
            checked={todo.checked}
          />
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button onClick={() => handleDeleteTodo(todo.id)} basic color="red">
              Delete
            </Button>
            <Button onClick={() => handleEditTodo(todo)} basic color="yellow">
              Edit
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default ToDoCard;
