import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./FloatingButton.scss"; // Import custom CSS for styling
interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton :React.FC<FloatingButtonProps> = ({ onClick }) =>   {
  return (
    <div className="floating-button-container">
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id={`tooltip-top`}>Click here to add new todo</Tooltip>
        }
      >
        <button  data-testid="addBtn" onClick={onClick} className="floating-button">
          +
        </button>
      </OverlayTrigger>
    </div>
  );
};

export default FloatingButton;
