import React,{ useState } from "react";
import { AnimatedLetters } from "../animated-letters/animated-letters.component";
import { MButton } from "../button/button.component";
import { ButtonContainer, HeaderCotainer, InputCotainer, InputHeader } from "./to-do-header.styles";

type ToDoHeaderType = {
    onInsert: (item_value: string) => void
}


export const ToDoHeader: React.FC<ToDoHeaderType> = ({ onInsert }) => {
    const to_do_title = 'ToDo List'.split('');
    const [to_do_input, setToDoInput] = useState<string>("");


    const handleToDoInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToDoInput(event.target.value);
    }

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            onInsert(to_do_input);
            setToDoInput("");
        }
    }

    const handleAddButtonClick = () => {
        onInsert(to_do_input);
        setToDoInput("");
    }

    return (
        <HeaderCotainer data-testid='header'>
            <AnimatedLetters
                strArray={to_do_title}
                idx={15}
            />
            <InputCotainer>
                <InputHeader
                    label="ToDo list"
                    name="todolist"
                    value={to_do_input}
                    type="text"
                    onChange={handleToDoInputChange}
                    onKeyUp={handleKeyUp}
                />
                <ButtonContainer>
                    <MButton
                        button_style='inverted'
                        onClick={handleAddButtonClick}
                    >
                        Add
                    </MButton>
                </ButtonContainer>
            </InputCotainer>
        </HeaderCotainer>
    )
}