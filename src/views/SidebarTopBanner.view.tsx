import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ForstaIcon from '../images/forsta.png';
import { TestID } from 'testID';

export const SidebarTopBanner = () => {
  return (
    <Stack direction="row" alignItems="center" mt={2} mb={2} data-testid={TestID.SidebarTopBanner}>
      <img src={ForstaIcon} alt="Forsta" className="avatar" />
      <Stack direction="column">
        <Typography variant="body1" ml={2} data-testid={TestID.SidebarTopBannerTitle}>
          Do-it
        </Typography>
        <Typography
          variant="body1"
          ml={2}
          className="purple"
          data-testid={TestID.SidebarTopBannerDescribtion}
        >
          Daily to do tasks
        </Typography>
      </Stack>
    </Stack>
  );
};
