import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  List,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  CircularProgress,
} from '@mui/material';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const API_BASE_URL = "http://localhost:5000/api"


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/todos`);
      setTodos(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, { title });
      setTodos([...todos, response.data]);
    } catch (err) {
      setError('Failed to add todo');
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/todos/${id}`,
        updatedTodo
      );
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    } catch (err) {
      setError('Failed to update todo');
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todoToToggle = todos.find((todo) => todo.id === id);
      const response = await axios.put(`${API_BASE_URL}/todos/${id}`, {
        ...todoToToggle,
        completed: !todoToToggle.completed,
      });
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    } catch (err) {
      setError('Failed to update todo');
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (loading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Typography color='error' align='center' sx={{ mt: 4 }}>
        {error}
      </Typography>
    );

  return (
    <Box>
      <AddTodo onAdd={addTodo} />
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(e, newFilter) => setFilter(newFilter || filter)}
          aria-label='todo filter'
        >
          <ToggleButton value='all' aria-label='all todos'>
            All
          </ToggleButton>
          <ToggleButton value='active' aria-label='active todos'>
            Active
          </ToggleButton>
          <ToggleButton value='completed' aria-label='completed todos'>
            Completed
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <List>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
            onUpdate={updateTodo}
          />
        ))}
      </List>
      {filteredTodos.length === 0 && (
        <Typography align='center' color='textSecondary'>
          No todos to display
        </Typography>
      )}
    </Box>
  );
}

export default TodoList;
