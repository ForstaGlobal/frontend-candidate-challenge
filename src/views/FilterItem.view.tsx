import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Circle from '@mui/icons-material/Brightness1';
import AddCircle from '@mui/icons-material/AddCircle';
import { TestID } from 'testID';

export const FilterItem: React.FC<{
  label: string;
  className: string;
  addFilter?: boolean;
  clickHandler?: () => void;
  selected?: boolean;
}> = ({ label, className, addFilter, clickHandler, selected }) => (
  <ListItem disablePadding sx={{ pl: 3 }} onClick={clickHandler}>
    <ListItemButton className={selected ? 'selected' : ''} data-testid={TestID.FilterItemButton}>
      <ListItemIcon sx={{ mr: -2 }}>
        {addFilter && <AddCircle fontSize="small" className={className} />}
        {!addFilter && <Circle fontSize="small" className={className} />}
      </ListItemIcon>
      <ListItemText primary={label} className={className} />
    </ListItemButton>
  </ListItem>
);
