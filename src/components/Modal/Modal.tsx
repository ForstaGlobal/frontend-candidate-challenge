import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  InputsContainer,
  ModalBody,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalInput,
  ModalTitle,
  RadiolInput,
  StyledModal,
} from "./styles";

type TodoProps = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  currentItem?: Todo | undefined;
  setCurrentItem: Dispatch<SetStateAction<Todo | undefined>>;
};

const Inputs = ({
  value,
  done,
  onInputChange,
  onRadioChange,
}: {
  value?: string;
  done?: boolean;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <InputsContainer>
      <ModalInput
        data-testid="modalInput"
        onChange={onInputChange}
        placeholder="Add item"
        value={value}
      ></ModalInput>
      <div>
        <RadiolInput
          onChange={onRadioChange}
          data-testid="radiolInput"
          type="radio"
          value={0}
          checked={done === false}
        />
        To do{" "}
        <RadiolInput
          type="radio"
          value={1}
          checked={done === true}
          onChange={onRadioChange}
        />
        Done
      </div>
    </InputsContainer>
  );
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
  const [localItem, setLocalItem] = useState<Todo | undefined>(currentItem);

  useEffect(() => {
    setLocalItem(currentItem);
  }, [currentItem]);

  const notEditing = currentItem === undefined;

  if (!show) return null;
  const notify = () => toast.error("You must add a chore.");

  function onRadioChange(value: string) {
    setDone(value !== "0");
  }

  function submit() {
    try {
      if (chore === "" && notEditing) {
        notify();
        return;
      }

      if (!notEditing) {
        if (localItem?.text === "") {
          notify();
          return;
        }
      }

      if (
        todos.find((todo) => todo.id === currentItem?.id) &&
        localItem &&
        currentItem
      ) {
        const oldTodos = todos.filter((todo) => todo?.id !== currentItem?.id);
        setTodos([...oldTodos, { ...localItem, id: currentItem.id }]);
        setCurrentItem(undefined);
        setLocalItem(undefined);
        setShow(false);
        return;
      }
      setTodos([...todos, { text: chore, done, id: todos.length }]);
      setShow(false);
      setCurrentItem(undefined);
      setLocalItem(undefined);
    } catch (error) {
      console.log(error);
    }
  }

  function handleEditingLocalItem(item: string, property: string) {
    if (localItem) {
      if (property === "done") {
        setLocalItem(
          item === "0"
            ? { ...localItem, [property]: false }
            : { ...localItem, [property]: true }
        );
        return;
      }
      setLocalItem({ ...localItem, [property]: item });
    }
  }

  return (
    <StyledModal
      data-testid="modal"
      onClick={() => {
        setShow(false);
        setCurrentItem(undefined);
        setLocalItem(undefined);
      }}
    >
      <ModalContent
        onClick={(e: React.ChangeEvent<HTMLDivElement>) => {
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
            <Inputs
              onRadioChange={(event) => onRadioChange(event.target.value)}
              done={done}
              onInputChange={(event) => setChore(event.target.value)}
            ></Inputs>
          ) : (
            <Inputs
              onRadioChange={(event) =>
                handleEditingLocalItem(event.target.value, "done")
              }
              onInputChange={(event) =>
                handleEditingLocalItem(event.target.value, "text")
              }
              value={localItem?.text}
              done={localItem?.done}
            ></Inputs>
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
              setCurrentItem(undefined);
              setLocalItem(undefined);
            }}
          >
            Cancel
          </ModalButton>
        </ModalFooter>
      </ModalContent>
    </StyledModal>
  );
};
