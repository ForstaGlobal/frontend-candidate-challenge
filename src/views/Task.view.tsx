import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Circle from '@mui/icons-material/Brightness1';
import CheckedCircle from '@mui/icons-material/CheckCircleOutline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import UncheckedCircle from '@mui/icons-material/RadioButtonUnchecked';
import Tooltip from '@mui/material/Tooltip';
import { TaskType } from 'types';
import { TestID } from 'testID';

export const Task: React.FC<{
  task: TaskType;
  onChange: (id: number, str: string) => void;
  getTaskColor: (taskCategory: string) => string;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
}> = ({ task, onChange, getTaskColor, onDelete, onDone }) => {
  const [taskDone, setTaskDone] = useState<boolean>(task.done);

  const onClick = () => {
    setTaskDone((taskDone) => !taskDone);

    // allows the change in state to be visible to the user before filterings happen.
    setTimeout(() => {
      onDone(task.id);
    }, 500);
  };

  return (
    <Stack direction="row" className="task" alignItems="center">
      <Circle
        fontSize="small"
        className={getTaskColor(task.category)}
        data-testid={TestID.TaskViewCategory}
      />

      <TextField
        placeholder="What is your next task?"
        variant="standard"
        value={task.text}
        onChange={(e) => onChange(task.id, e.target.value)}
        InputProps={{ disableUnderline: true, className: 'grey' }}
        sx={{ ml: 2, mr: 2, width: '100%' }}
        data-testid={TestID.TaskViewTextField}
      />

      <Typography variant="body1" minWidth="100px" className="grey">
        {task.time}
      </Typography>

      <Tooltip title="Delete">
        <DeleteIcon className="light-grey delete-icon" onClick={() => onDelete(task.id)} />
      </Tooltip>

      {!taskDone && (
        <Tooltip title="Mark as done">
          <UncheckedCircle className="light-grey done-btn" onClick={onClick} />
        </Tooltip>
      )}
      {taskDone && (
        <Tooltip title="Mark as undone">
          <CheckedCircle className="purple done-btn" onClick={onClick} />
        </Tooltip>
      )}
    </Stack>
  );
};
