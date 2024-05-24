/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToggleButtons from '../components/ToggleButtons';

it('should render without crashing', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(<ToggleButtons setFilter={() => {}} />);
});
