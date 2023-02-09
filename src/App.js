import React from "react";
import "./App.css";
import logo from './to-do-list.png'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTask, unmarkTask, removeTask }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : " " }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTask(index)}>Complete</Button>{' '}
        <Button variant="outline-warning" onClick={() => unmarkTask(index)}>In progress</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTask(index)}>Delete</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label className="fs-3"><b>Add Task to complete</b></Form.Label>
      <Form.Control type="text" className="input fs-5 mb-3 mt-2" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new task" />
    </Form.Group>
    <Button className="primary mb-3 mt-2 fs-5" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is an example of a task completed",
      isDone: true
    },
    {
      text: "This is an example of a task in progress",
      isDone: false
    },
    {
      text: "This is an example of a task in progress",
      isDone: false
    },
    {
      text: "This is an example of a task in progress",
      isDone: false
    },
    {
      text: "This is an example of a task in progress",
      isDone: false
    },
    {
      text: "This is an example of a task in progress",
      isDone: false
    },
    {
      text: "This is an example of a task in progress",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTask = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const unmarkTask = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = false;
    setTodos(newTodos);
  };

  const removeTask = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container justify-content-md-center">
        <h1 className="text-center m-2">Todo List 
        <img className="m-2" src={logo} alt="Logo"  style={{ height: 75, width: 75 }} />
        </h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                unmarkTask={unmarkTask}
                markTask={markTask}
                removeTask={removeTask}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;