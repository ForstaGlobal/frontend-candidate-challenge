import React from "react"
import { ItemListModel } from "../../model/item-list.model"
import { ItemListActions, ToDoItemList } from "./to-do-item-list/to-do-item-list.component"
import { ListCotainer } from "./to-do-list.styles"

type ToDoListType = {
    array_list: ItemListModel[],
    onActions: (item: ItemListModel, action: ItemListActions) => void
}

export const ToDoList: React.FC<ToDoListType> = ({ array_list, onActions }) => {

    return (
        <ListCotainer>
            {
                array_list.map(
                    item => <ToDoItemList
                        key={item.id}
                        item_list={item}
                        onActions={onActions}
                    />
                )
            }
        </ListCotainer>
    )
}