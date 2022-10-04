import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 500px;
  background-color: #fff;
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  padding: 10px;
`;

export const ModalFooter = styled.div`
  display: flex;
  padding: 10px;
`;

export const ModalTitle = styled.h4`
  margin: 0;
`;

export const ModalBody = styled.div`
  padding: 20px 0 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  display: block;
  border-radius: 10px;
  color: #333;
  background-color: #ff3aff;
`;

export const ModalInput = styled.input`
  padding: 5px;
  border-radius: 10px;
  color: #333;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const RadiolInput = styled.input`
  color: #333;
`;

export const InputsContainer = styled.div`
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
