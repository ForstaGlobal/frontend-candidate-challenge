import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, Checkbox, TextField } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import useTodoStore from '../store/useTodoStore';
import { TodoItem } from '../types';

interface TaskItemProps {
  todo: TodoItem;
}

const TaskItem: React.FC<TaskItemProps> = ({ todo }) => {
  const removeTodoItem = useTodoStore((state) => state.removeTodoItem);
  const updateStatus = useTodoStore((state) => state.updateStatus);
  const updateTitle = useTodoStore((state) => state.updateTitle);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTitle(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <ListItem>
      <Checkbox checked={todo.isCompleted} onClick={() => updateStatus(todo.id)} />
      {isEditing ? (
        <TextField
          fullWidth
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleSave}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSave();
            }
          }}
        />
      ) : (
        <ListItemText primary={todo.title} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} />
      )}
      <IconButton onClick={handleEdit} sx={{ background: "linear-gradient(0.125turn, #e66465, #ff00ff)" }}>
        <Edit />
      </IconButton>
      <IconButton onClick={() => removeTodoItem(todo.id)} sx={{ background: "linear-gradient(0.125turn, #e66465, #ff00ff)" }}>
        <Delete />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;
