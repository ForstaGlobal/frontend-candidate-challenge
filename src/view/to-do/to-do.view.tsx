import React, { useCallback, useState } from "react";
import { ToDoHeader } from "../../components/to-do-header/to-do-header.component";
import { ToDoList } from "../../components/to-do-list/to-do-list.component";
import { ItemListModel } from "../../model/item-list.model";
import { v4 as uuidv4 } from 'uuid';
import { ItemListActions } from "../../components/to-do-list/to-do-item-list/to-do-item-list.component";
import { ThreeWaySwitch } from "../../components/three-way-switch/three-way-switch.component";

export type ThreeWayToggleType = 'all' | 'done' | 'not done';

export const ToDoView: React.FC = () => {

    const [array_list, setArrayList] = useState<ItemListModel[]>([]);
    const [three_way_toggle, setThreeWayToggle] = useState<ThreeWayToggleType>('all');

    const handleNewItem = (item_value: string) => {
        if (item_value.trim() !== '') {
            setArrayList([new ItemListModel(uuidv4(), item_value, false), ...array_list]);
        }
    }

    const handleItemActions = (item: ItemListModel, action: ItemListActions) => {
        let new_array = [...array_list];
        switch (action) {
            case 'Update':
                new_array = new_array.map(obj => obj.id === item.id ? item : obj);
                setArrayList(new_array);
                break;
            case 'Delete':
                setArrayList(new_array.filter(obj => obj.id !== item.id));
                break;
            case 'Done':
                new_array = new_array.map(obj => obj.id === item.id ? { ...obj, done: !obj.done } : obj);
                setArrayList(new_array);
                break;
            default:
                break;
        }
    }

    const handleToggleChange = (val: ThreeWayToggleType) => {
        setThreeWayToggle(val);
    }

    const handleToggledArrayList = useCallback(
        () => {
            if (three_way_toggle === 'done') {
                return array_list.filter(item => item.done === true);
            }
            else if (three_way_toggle === 'not done') {
                return array_list.filter(item => item.done === false);
            } else {
                return array_list
            }
        }, [three_way_toggle, array_list]
    )

    return (
        <div style={{ padding: '20px', height: '100%', width: '100%' }}>
            <div style={{ position: 'relative', padding: '0px 20px', width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px' }}>
                <div style={{ position: 'absolute', top: '30px', right: '20px' }}>
                    <ThreeWaySwitch
                        values={['all', 'done', 'not done']}
                        selected={three_way_toggle}
                        onToggleChange={handleToggleChange}
                    />
                </div>
                <ToDoHeader
                    onInsert={handleNewItem}
                />
                {
                    array_list.length === 0 ?
                        <span>no item in the list...</span>
                        :
                        <ToDoList
                            array_list={handleToggledArrayList()}
                            onActions={handleItemActions}
                        />
                }
            </div>
        </div>
    );
}