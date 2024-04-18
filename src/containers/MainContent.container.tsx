import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Circle from '@mui/icons-material/Brightness1';
import UncheckedCircle from '@mui/icons-material/RadioButtonUnchecked';
import CheckedCircle from '@mui/icons-material/CheckCircleOutline';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DeleteIcon from '@mui/icons-material/Delete';

export const MainContentContainer = () => {
  return (
    <Stack direction="column" className="main-content" p={2} width="60%">
      <Typography variant="h5" className="white">
        Today main foucs
      </Typography>
      <Typography variant="h3" className="white" mt={1} fontWeight="bold">
        Finish the app
      </Typography>

      <Stack direction="row" className="add-task" mt={5} alignItems="center">
        <Circle fontSize="small" className="red" />
        <Circle fontSize="small" className="blue" />
        <Circle fontSize="small" className="yellow" />

        <TextField
          placeholder="What is your next task?"
          variant="standard"
          InputProps={{ disableUnderline: true, className: 'grey' }}
          sx={{ ml: 2, mr: 2, width: '100%' }}
        />

        <ScheduleIcon className="purple schedule-btn" />
      </Stack>

      <Stack className="tasks" mt={5} gap={2}>
        <Stack direction="row" className="task" alignItems="center">
          <Circle fontSize="small" className="red" />

          <TextField
            placeholder="What is your next task?"
            variant="standard"
            InputProps={{ disableUnderline: true, className: 'grey' }}
            sx={{ ml: 2, mr: 2, width: '100%' }}
          />

          <Typography variant="body1" minWidth="100px" className="grey">
            8:00 am
          </Typography>

          <DeleteIcon className="light-grey delete-icon" />
          <UncheckedCircle className="light-grey" />
        </Stack>

        <Stack direction="row" className="task" alignItems="center">
          <Circle fontSize="small" className="blue" />

          <TextField
            placeholder="What is your next task?"
            variant="standard"
            InputProps={{ disableUnderline: true, className: 'grey' }}
            sx={{ ml: 2, mr: 2, width: '100%' }}
          />

          <Typography variant="body1" minWidth="100px" className="grey">
            09:42 pm
          </Typography>

          <CheckedCircle className="purple" />
        </Stack>

        <Stack direction="row" className="task" alignItems="center">
          <Circle fontSize="small" className="yellow" />

          <TextField
            placeholder="What is your next task?"
            variant="standard"
            InputProps={{ disableUnderline: true, className: 'grey' }}
            sx={{ ml: 2, mr: 2, width: '100%' }}
          />

          <Typography variant="body1" minWidth="100px" className="grey">
            09:42 pm
          </Typography>

          <CheckedCircle className="purple" />
        </Stack>
      </Stack>
    </Stack>
  );
};
