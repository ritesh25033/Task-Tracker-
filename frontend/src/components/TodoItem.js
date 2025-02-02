import { useState } from 'react';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTitle.trim() !== '') {
      onUpdate(todo.id, { ...todo, title: editedTitle });
      setIsEditing(false);
    }
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  return (
    <ListItem
      secondaryAction={
        <Box>
          {isEditing ? (
            <IconButton edge='end' aria-label='save' onClick={handleSave}>
              <SaveIcon />
            </IconButton>
          ) : (
            <IconButton edge='end' aria-label='edit' onClick={handleEdit}>
              <EditIcon />
            </IconButton>
          )}
          <IconButton
            edge='end'
            aria-label='delete'
            onClick={() => onDelete(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      }
    >
      <Checkbox
        edge='start'
        checked={todo.completed}
        onChange={handleToggle}
        tabIndex={-1}
        disableRipple
      />
      {isEditing ? (
        <TextField
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          fullWidth
          variant='standard'
          autoFocus
          onBlur={handleSave}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSave();
            }
          }}
        />
      ) : (
        <ListItemText
          primary={todo.title}
          sx={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'text.secondary' : 'text.primary',
          }}
        />
      )}
    </ListItem>
  );
}

export default TodoItem;
