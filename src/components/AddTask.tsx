import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

interface AddTaskProps {
  addTodoItem: (title: string) => void;
}

const AddTask = ({ addTodoItem }: AddTaskProps) => {
  const [title, setTitle] = useState('');

  const handleTodoSubmit = () => {
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTodoSubmit();
    }
  };

  return (
    <Box>
      <FormControl variant="outlined" fullWidth>
        <OutlinedInput
          type="text"
          size="small"
          placeholder="Add a new task"
          value={title}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Add todo" edge="end" onClick={handleTodoSubmit} sx={{ background: 'linear-gradient(0.125turn, #ff7f50, #ff00ff)' }}>
                <AddCircleRoundedIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default AddTask;
