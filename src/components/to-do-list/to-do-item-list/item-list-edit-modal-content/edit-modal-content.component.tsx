import React from "react";
import { MButton } from "../../../button/button.component";
import { ModalClassTypes } from "../../../modal/modal.component";
import { ButtonsContainer, EditModalContainer, ItemListInput, StyledFaTimes } from "./edit-modal-content.styles";

type ItemListEditModalType = {
    value: string | undefined;
    onModalUpdate:(class_type: ModalClassTypes) => void;
    onChangeValue:(event: React.ChangeEvent<HTMLInputElement>) => void;
    onSaveUpdate:() => void;
}

export const ItemListEditModal: React.FC<ItemListEditModalType> = ({onModalUpdate, onSaveUpdate, onChangeValue, value}) => {

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            onSaveUpdate();
        }
    }

    return (
        <EditModalContainer>
            <h2>
                Edit
                <StyledFaTimes onClick={() => onModalUpdate('out')} />
            </h2>
            <ItemListInput
                label="New value"
                name="new_value"
                value={value}
                type="text"
                onChange={onChangeValue}
                onKeyUp={handleKeyUp}
            />
            <ButtonsContainer>
                <MButton
                    button_style='inverted'
                    onClick={() => onModalUpdate('out')}
                >
                    Cancel
                </MButton>
                <MButton
                    onClick={onSaveUpdate}
                >
                    Confirm
                </MButton>
            </ButtonsContainer>
        </EditModalContainer>
    )
}