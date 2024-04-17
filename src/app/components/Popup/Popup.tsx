import { Modal } from "react-bootstrap";
import "./Popup.scss";
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal data-testid="modal" show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default Popup;
