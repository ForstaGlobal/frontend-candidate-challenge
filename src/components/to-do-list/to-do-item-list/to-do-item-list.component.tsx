import React, { useState } from "react";
import { ItemListModel } from "../../../model/item-list.model";
import { ModalClassTypes, ModalComponent } from "../../modal/modal.component";
import { ItemListEditModal } from "./item-list-edit-modal-content/edit-modal-content.component";
import { ActionsCotainer, ItemListCotainer, StyledFaCheckCircle, StyledFaPencilAlt, StyledFaRegCircle, StyledFaTrashAlt, TaskContainer } from "./to-do-item-list.styles";

export type ItemListActions = "Done" | "Update" | "Delete";

type ToDoItemListType = {
    item_list: ItemListModel,
    onActions: (item: ItemListModel, action: ItemListActions) => void
}

export const ToDoItemList: React.FC<ToDoItemListType> = ({ item_list, onActions }) => {

    const [value, setValue] = useState<string | undefined>(undefined);
    const [modal_class, setModalClass] = useState<ModalClassTypes>();

    const handleUpdateModal = (class_type: ModalClassTypes) => {
        setModalClass(class_type);
        if (class_type === 'out') {
            setValue(undefined);
        } else {
            setValue(item_list.value);
        }
    }

    const handleItemListValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleSaveUpdate = () => {
        if (typeof value !== 'undefined') {
            onActions({ ...item_list, value: value }, 'Update');
            handleUpdateModal('out');
        }
    }

    return (
        <ItemListCotainer data-testid="item-list-container">
            <ModalComponent modal_class={modal_class} >
                <ItemListEditModal
                    value={value}
                    onModalUpdate={handleUpdateModal}
                    onChangeValue={handleItemListValueChange}
                    onSaveUpdate={handleSaveUpdate}
                />
            </ModalComponent>
            <ActionsCotainer>
                {
                    item_list.done ?
                        <StyledFaCheckCircle data-testid='item-list-container-done' onClick={() => onActions(item_list, 'Done')} />
                        :
                        <StyledFaRegCircle data-testid='item-list-container-not-done' onClick={() => onActions(item_list, 'Done')} />
                }
            </ActionsCotainer>
            <TaskContainer style={{ textDecoration: item_list.done ? 'line-through' : '' }}>
                <span
                    style={{ color: item_list.done ? 'gray' : '' }}
                    title={item_list.value}
                >
                    {item_list.value}
                </span>
            </TaskContainer>
            <ActionsCotainer>
                {
                    !item_list.done &&
                    <StyledFaPencilAlt data-testid="edit-svg-item-list" onClick={() => handleUpdateModal('modal-sketch')} />
                }
                <StyledFaTrashAlt
                    data-testid="delete-svg-item-list"
                    onClick={() => onActions(item_list, 'Delete')}
                />
            </ActionsCotainer>
        </ItemListCotainer>
    )
}