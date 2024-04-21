import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { ListIcons, SidebarListIcon } from './SidebarListIcon.view';

export const SidebarListButton: React.FC<{
  label: string;
  className: string;
  icon: ListIcons;
  mt?: number;
  mb?: number;
  onClick?: () => void;
}> = ({ label, className, icon, mt = 0, mb = 0, onClick }) => (
  <Stack mt={mt} mb={mb} onClick={onClick}>
    <ListItem disablePadding>
      <ListItemButton sx={{ ml: -2 }}>
        <ListItemIcon sx={{ mr: -2 }}>
          <SidebarListIcon icon={icon} className={className} />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  </Stack>
);
