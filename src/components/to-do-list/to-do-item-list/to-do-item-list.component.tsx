import React, { useState } from "react";
import { ItemListModel } from "../../../model/item-list.model";
import { ActionsCotainer, ItemListCotainer, ItemListInput, ItemListInputContainer, StyledFaCheck, StyledFaCheckCircle, StyledFaPencilAlt, StyledFaRegCircle, StyledFaTimes, StyledFaTrashAlt, TaskContainer } from "./to-do-item-list.styles";

export type ItemListActions = "Done" | "Update" | "Delete";

type ToDoItemListType = {
    item_list: ItemListModel,
    onActions: (item: ItemListModel, action: ItemListActions) => void
}

export const ToDoItemList: React.FC<ToDoItemListType> = ({ item_list, onActions }) => {

    const [value, setValue] = useState<string | undefined>(undefined);

    const handleUpdate = () => {
        setValue(item_list.value);
    }

    const handleItemListValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    const handleFaTimesClick = () => {
        setValue(undefined);
    }

    const handleSaveUpdate = () => {
        if (typeof value !== 'undefined') {
            onActions({ ...item_list, value: value }, 'Update');
            setValue(undefined);
        }
    }

    return (
        <ItemListCotainer>
            <ActionsCotainer>
                {
                    item_list.done ?
                        <StyledFaCheckCircle onClick={() => onActions(item_list, 'Done')} />
                        :
                        <StyledFaRegCircle onClick={() => onActions(item_list, 'Done')} />
                }
            </ActionsCotainer>
            <TaskContainer style={{ textDecoration: item_list.done ? 'line-through' : '' }}>
                {
                    typeof value === 'undefined' ?
                        <span
                            style={{ color: item_list.done ? 'gray' : '' }}
                            title={item_list.value}
                        >
                            {item_list.value}
                        </span>
                        :
                        <ItemListInputContainer>
                            <ItemListInput
                                value={value}
                                autoFocus
                                onChange={handleItemListValueChange}
                                onFocus={(e) => { e.target.select() }}
                            />
                            <StyledFaTimes
                                onClick={handleFaTimesClick}
                            />
                            <StyledFaCheck
                                onClick={handleSaveUpdate}
                            />
                        </ItemListInputContainer>
                }
            </TaskContainer>
            <ActionsCotainer>
                {
                    (!item_list.done && typeof value === 'undefined') &&
                    <StyledFaPencilAlt onClick={handleUpdate} />
                }
                <StyledFaTrashAlt onClick={() => onActions(item_list, 'Delete')} />
            </ActionsCotainer>
        </ItemListCotainer>
    )
}