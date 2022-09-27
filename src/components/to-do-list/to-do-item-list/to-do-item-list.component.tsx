import React, { useState } from "react";
import { ItemListModel } from "../../../model/item-list.model";
import { ActionsCotainer, ItemListCotainer, ItemListInput, ItemListInputContainer, StyledFaCheck, StyledFaCheckCircle, StyledFaPencilAlt, StyledFaTimes, StyledFaTrashAlt, TaskContainer } from "./to-do-item-list.styles";

export type ItemListActions = "Done" | "Update" | "Delete";

type ToDoItemListType = {
    item_list: ItemListModel,
    onActions: (item: ItemListModel, action: ItemListActions) => void
}

export const ToDoItemList: React.FC<ToDoItemListType> = ({ item_list, onActions }) => {

    const [value, setValue] = useState<string | undefined>(undefined);

    const handleUpdate = () => {
        //() => onActions(item_list, 'Update')
        setValue(item_list.value);
    }

    const handleItemListValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    const handleFaTimesClick = () => {
        setValue(undefined);
    }

    return (
        <ItemListCotainer>
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
                            <ItemListInput value={value} autoFocus onChange={handleItemListValueChange} />
                            <StyledFaTimes onClick={handleFaTimesClick}/>
                            <StyledFaCheck />
                        </ItemListInputContainer>
                }
            </TaskContainer>
            <ActionsCotainer>
                {typeof value === 'undefined' && <StyledFaCheckCircle onClick={() => onActions(item_list, 'Done')} />}
                {(!item_list.done && typeof value === 'undefined') && <StyledFaPencilAlt onClick={handleUpdate} />}
                <StyledFaTrashAlt onClick={() => onActions(item_list, 'Delete')} />
            </ActionsCotainer>
        </ItemListCotainer>
    )
}