const express = require("express")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const todos = []
let nextId = 1

// GET /api/todos - Retrieve all todos
app.get("/api/todos", (req, res) => {
  res.json(todos)
})

// POST /api/todos - Create a new todo
app.post("/api/todos", (req, res) => {
  const { title } = req.body
  if (!title) {
    return res.status(400).json({ error: "Title is required" })
  }
  const newTodo = {
    id: nextId++,
    title,
    completed: false,
  }
  todos.push(newTodo)
  res.status(201).json(newTodo)
})

// DELETE /api/todos/{id} - Delete a todo
app.delete("/api/todos/:id", (req, res) => {
  const id = Number.parseInt(req.params.id)
  const index = todos.findIndex((todo) => todo.id === id)
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" })
  }
  todos.splice(index, 1)
  res.status(204).end()
})

// PATCH /api/todos/{id} - Toggle todo completion status
app.patch("/api/todos/:id", (req, res) => {
  const id = Number.parseInt(req.params.id)
  const todo = todos.find((todo) => todo.id === id)
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" })
  }
  todo.completed = !todo.completed
  res.json(todo)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

