import React from 'react'
import "../App.css";
import logo from '../resources/to-do-list.png'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Task({ task, index, removeTask, toogleChecked }) {
  return (
    <div className="container">
      <div className='row'>
        <span className='fs-5 fw-bold col-6 mb-2'  style={{ textDecoration: task.isDone ? "line-through" : " " }}>{task.text}</span>
        <Form.Check className='col-5' type="switch" label="Completed" checked={task.isDone} onClick={() => toogleChecked(index, task.isDone)} />
        <Button className='col' variant="outline-danger" onClick={() => removeTask(index)}>Delete</Button>
      </div>
    </div>
  );
}

function FormTask({ addTask }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label className="fs-3 fw-bold text-light"><b>Add Task to complete</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new task" />
    </Form.Group>
    <Button className="primary mb-3 mt-2 fs-5" type="submit">
      Submit
    </Button>
  </Form>
  );
}

const ToDoList = () => {
  const [tasks, setTasks] = React.useState([
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

  const addTask = (text) => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };

    const toogleChecked = (index, isDone) => {
        const newTasks = [...tasks];
        if (isDone) {
            newTasks[index].isDone = false;
            setTasks(newTasks);
        }else {
            newTasks[index].isDone = true;
            setTasks(newTasks);
        }
    };
    
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <div className="container justify-content-sm-center">
        <h1 className="text-center m-2 fw-bold">TO-DO LIST 
        <img className="m-2" src={logo} alt="Logo"  style={{ height: 75, width: 75 }} />
        </h1>
        <FormTask addTask={addTask} />
        <div>
          {tasks.map((task, index) => (
            <Card className='mt-1'>
              <Card.Body>
                <Task
                index={index}
                task={task}
                checked={task.isDone}
                toogleChecked = {toogleChecked}
                removeTask = {removeTask}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;