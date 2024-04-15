import { render , screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Popup from '../Popup';

describe('Popup component', () => {
  test('renders with modal closed', () => {
    render(<Popup isOpen={false} onClose={() => {}} />); 
    const modal = screen.queryByTestId("modal");
    expect(modal).toBeNull();
  });

  test('renders with modal open', () => {
    render(<Popup isOpen={true} onClose={() => {}} />); 
    const modal = screen.queryByTestId("modal");
    expect(modal).toBeInTheDocument();  
  });

  test('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Popup isOpen={true} onClose={onCloseMock} />);
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1); 
  });

  test('renders children content', () => {
    const childContent = 'This is the child content';
   render(
      <Popup isOpen={true} onClose={() => {}}>
        {childContent}
      </Popup>
    );
    const childElement = screen.getByText(childContent);
    expect(childElement).toBeInTheDocument();  
  });
});
