import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { TestID } from 'testID';

export const AddTask: React.FC<
  React.PropsWithChildren<{
    value: string;
    onChange: (str: string) => void;
    onKeyUp: (str: string) => void;
  }>
> = ({ value, onChange, onKeyUp, children }) => {
  return (
    <Stack direction="row" className="add-task" mt={5} alignItems="center">
      {children}

      <TextField
        placeholder="What is your next task?"
        variant="standard"
        InputProps={{ disableUnderline: true, className: 'grey' }}
        sx={{ ml: 2, mr: 2, width: '100%' }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyUp={(e) => onKeyUp(e.key)}
        data-testid={TestID.AddTaskTextField}
      />

      <ScheduleIcon className="purple" />
    </Stack>
  );
};
