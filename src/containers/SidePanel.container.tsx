import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Circle from '@mui/icons-material/Brightness1';
import AddCircle from '@mui/icons-material/AddCircle';
import EventIcon from '@mui/icons-material/Event';
import ForstaIcon from '../images/forsta.png';
import SettingsIcon from '@mui/icons-material/Settings';
import FinishedIcon from '@mui/icons-material/AssignmentTurnedIn';

export const SidePanelContainer = () => {
  return (
    <Stack direction="column" className="side-panel" p={3}>

      <Stack direction="row" alignItems="center" mt={2} mb={2}>
        <img src={ForstaIcon} alt="Forsta" className="avatar" />
        <Stack direction="column">
          <Typography variant="body1" ml={2}>
            Do-it
          </Typography>
          <Typography variant="body1" ml={2} className="purple">
            Daily to do tasks
          </Typography>
        </Stack>
      </Stack>

      <Stack className="divider" mb={5}>
        &nbsp;
      </Stack>

      <List>
        
        <ListItem disablePadding>
          <ListItemIcon sx={{ mr: -2 }}>
            <EventIcon fontSize="small" className="light-grey" />
          </ListItemIcon>
          <ListItemText primary="To-Do Tasks" />
        </ListItem>

        <ListItem disablePadding sx={{ pl: 3 }} >
          <ListItemButton>
            <ListItemIcon sx={{ mr: -2 }}>
              <Circle fontSize="small" className="red" />
            </ListItemIcon>
            <ListItemText primary="Personal" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 3 }}>
          <ListItemButton>
            <ListItemIcon sx={{ mr: -2 }}>
              <Circle fontSize="small" className="blue" />
            </ListItemIcon>
            <ListItemText primary="School" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 3 }}>
          <ListItemButton>
            <ListItemIcon sx={{ mr: -2 }}>
              <Circle fontSize="small" className="yellow" />
            </ListItemIcon>
            <ListItemText primary="Work" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 3 }}>
          <ListItemButton>
            <ListItemIcon sx={{ mr: -2 }}>
              <AddCircle fontSize="small" className="light-grey" />
            </ListItemIcon>
            <ListItemText primary="Add filter" className="light-grey" />
          </ListItemButton>
        </ListItem>

      </List>

      <Stack mt={2}>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ml: -2}}>
            <ListItemIcon sx={{ mr: -2 }}>
              <FinishedIcon fontSize="small" className="light-grey" />
            </ListItemIcon>
            <ListItemText primary="Finished tasks" />
          </ListItemButton>
        </ListItem>
      </List>
      </Stack>

      <Stack mt={5} mb={5}>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ml: -2}}>
            <ListItemIcon sx={{ mr: -2 }}>
              <SettingsIcon fontSize="small" className="light-grey" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
      </Stack>

    </Stack>
  );
};
