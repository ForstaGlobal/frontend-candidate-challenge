import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface IProps {
  setFilter: (value: string) => void;
}

const ToggleButtons: React.FC<IProps> = ({ setFilter }) => {
  const [value, setValue] = React.useState<string>('all');

  const handleFilter = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue !== null) {
      setValue(newValue);
      setFilter(newValue);
    }
  };

  return (
    <ToggleButtonGroup
      value={value}
      size="small"
      exclusive
      aria-label="todo filters"
      color="primary"
      fullWidth
      sx={{
        '& .MuiToggleButton-root': {
          background: 'transparent',
          borderWidth: '3px',
          boxShadow: 'none',
          color: '#113247',
        },
        '& .Mui-selected': {
          background: 'linear-gradient(0.125turn, #ff7f50, #ff00ff)',
          color: '#fff',
        },
        '& .MuiToggleButton-root:hover': {
          background: 'rgba(255, 255, 255, 0.08)',
        },
      }}
    >
      <ToggleButton onClick={handleFilter} value="all" aria-label="All">
        All
      </ToggleButton>
      <ToggleButton onClick={handleFilter} value="todo" aria-label="Todo">
        Todo
      </ToggleButton>
      <ToggleButton onClick={handleFilter} value="completed" aria-label="Completed">
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtons;