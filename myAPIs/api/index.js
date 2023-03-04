// const express = require("express");
const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const express = require("express");
// const dotenv = require("dotenv");
// const colors = require("colors");
const cors = require("cors");
// const { json } = require("body-parser");
const { nanoid } = require("nanoid");

// dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(bodyParser.json());

let todos = [
  {
    id: nanoid(),
    title: "Add todo by typing in the input box",
    completed: false,
  },
  {
    id: nanoid(),
    title: "Click on the checkbox to mark the task as done",
    completed: true,
  },
  {
    id: nanoid(),
    title: "Click the delete button to delete task",
    completed: false,
  },
  {
    id: nanoid(),
    title:
      "Cool👌.. Now you are qualified enough to be the CEO of Mytodolist.pvt.ltd",
    completed: false,
  },
];
app.get("/", (req, res) => res.send("hiii"));
app.get("/todos", (req, res) => res.send(todos));

app.post("/todos", (req, res) => {
  const todo = { title: req.body.title, id: nanoid(), completed: false };
  todos.push(todo);
  return res.send(todo);
});

app.patch("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  const completed = Boolean(req.body.completed);
  if (index > -1) {
    todos[index].completed = completed;
  }
  return res.send(todos[index]);
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index > -1) {
    todos.splice(index, 1);
  }

  res.send(todos);
});

module.exports = app;
