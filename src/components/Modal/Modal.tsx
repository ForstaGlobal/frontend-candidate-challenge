import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  StyledModal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalBody,
  ModalButton,
  ModalInput,
  RadiolInput,
  InputsContainer,
} from "./styles";

type TodoProps = {
  todos: any[];
  setTodos: (arg0: any[]) => void;
  show: boolean;
  setShow: (arg0: boolean) => void;
  currentItem?: any;
  setCurrentItem: any;
};

export const Modal = ({
  todos,
  setTodos,
  show,
  setShow,
  currentItem,
  setCurrentItem,
}: TodoProps) => {
  const [chore, setChore] = useState("");
  const [done, setDone] = useState(false);
  const [localItem, setLocalItem] = useState(currentItem);

  useEffect(() => {
    setLocalItem(currentItem);
  }, [currentItem]);

  if (!show) return null;
  const notify = () => toast.error("You must add a chore.");

  function onRadioChange(value: string) {
    setDone(value === "0" ? false : true);
  }

  function submit() {
    try {
      if (chore === "" && notEditing) {
        notify();
        return;
      }

      if (!notEditing) {
        if (localItem.text === "") {
          notify();
          return;
        }
      }

      if (todos.find((todo) => todo.text === currentItem.text)) {
        const oldTodos = todos.filter((todo) => todo.text !== currentItem.text);
        setTodos([...oldTodos, localItem]);
        setShow(false);
        return;
      }
      setTodos([...todos, { text: chore, done }]);
      setShow(false);
      setCurrentItem({});
      setLocalItem({});
    } catch (error) {
      console.log(error);
    }
  }

  const notEditing = Object.keys(currentItem).length === 0;

  function handleEditingLocalItem(item: string, property: string) {
    if (property === "done") {
      return setLocalItem(
        item === "0"
          ? { ...localItem, [property]: false }
          : { ...localItem, [property]: true }
      );
    }
    return setLocalItem({ ...localItem, [property]: item });
  }

  return (
    <StyledModal
      data-testid="modal"
      onClick={() => {
        setShow(false);
        setCurrentItem({});
        setLocalItem({});
      }}
    >
      <ModalContent
        onClick={(e: any) => {
          e.stopPropagation();
        }}
      >
        <ModalHeader>
          <ModalTitle>
            {notEditing ? "Add your chore!" : "Edit your chore!"}
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          {notEditing ? (
            <InputsContainer>
              <ModalInput
                data-testid="modalInput"
                onChange={(event: any) => setChore(event.target.value)}
                placeholder="Add item"
              ></ModalInput>
              <div
                onChange={(event: any) => {
                  onRadioChange(event.target.value);
                }}
              >
                <RadiolInput
                  data-testid="radiolInput"
                  type="radio"
                  value={0}
                  checked={done === false}
                />
                To do{" "}
                <RadiolInput type="radio" value={1} checked={done === true} />
                Done
              </div>
            </InputsContainer>
          ) : (
            <InputsContainer>
              <ModalInput
                onChange={(event: any) =>
                  handleEditingLocalItem(event.target.value, "text")
                }
                value={localItem.text}
              ></ModalInput>
              <div
                onChange={(event: any) => {
                  handleEditingLocalItem(event.target.value, "done");
                }}
              >
                <RadiolInput
                  type="radio"
                  value={0}
                  checked={localItem.done === false}
                />
                To do{""}
                <RadiolInput
                  type="radio"
                  value={1}
                  checked={localItem.done === true}
                />
                Done
              </div>
            </InputsContainer>
          )}
        </ModalBody>
        <ModalFooter className="footer">
          <ModalButton
            data-testid="confirmButton"
            onClick={() => {
              submit();
            }}
          >
            Confirm
          </ModalButton>
          <ModalButton
            data-testid="cancelButton"
            onClick={() => {
              setShow(false);
              setCurrentItem({});
              setLocalItem({});
            }}
          >
            Cancel
          </ModalButton>
        </ModalFooter>
      </ModalContent>
    </StyledModal>
  );
};
