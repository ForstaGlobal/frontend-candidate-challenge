import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { SidePanelContainer } from './containers/SidePanel.container';
import { MainContentContainer } from './containers/MainContent.container';
import './styles.scss';

export default function App() {
  return (
    <Stack className="app" direction='row'>
      <Container maxWidth="lg">
        <Stack direction='row' className="sections" mt={-2}>
          <SidePanelContainer />
          <MainContentContainer />
        </Stack>
      </Container>
    </Stack>
  );
}
