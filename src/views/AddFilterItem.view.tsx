import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Circle from '@mui/icons-material/Brightness1';
import TextField from '@mui/material/TextField';

export const AddFilterItem: React.FC<{
  handler: (str: string) => void;
  onChange: (str: string) => void;
  value: string;
}> = ({ handler, onChange, value }) => {
  return (
    <ListItem disablePadding sx={{ pl: 3 }}>
      <ListItemButton>
        <ListItemIcon sx={{ mr: -2, alignItems: 'center' }}>
          <Circle fontSize="small" className="light-grey" />
          <TextField
            autoFocus
            placeholder="Add new"
            variant="standard"
            InputProps={{ disableUnderline: true, className: 'grey' }}
            sx={{ ml: 2, mr: 2, width: '100px' }}
            value={value}
            onKeyUp={(e) => handler(e.key)}
            onBlur={(e) => handler('Escape')}
            onChange={(e) => onChange(e.target.value)}
          />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};
