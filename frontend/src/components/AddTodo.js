import { useState } from "react"
import { TextField, Button, Box } from "@mui/material"

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) {
      setError("Title cannot be empty")
      return
    }
    onAdd(title)
    setTitle("")
    setError("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", mb: 2 }}>
        <TextField
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo"
          error={!!error}
          helperText={error}
          variant="outlined"
          size="small"
        />
        <Button type="submit" variant="contained" sx={{ ml: 1 }}>
          Add
        </Button>
      </Box>
    </form>
  )
}

export default AddTodo

