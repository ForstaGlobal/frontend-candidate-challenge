import React from "react";
import { InputLabel, Group, Input } from "./input.styles";

type InputProps = {
    label?: string,
    name?: string,
    type?: React.HTMLInputTypeAttribute;
    id?: string;
    className?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
    onKeyUp?:React.KeyboardEventHandler<HTMLInputElement>;
}

export const InputComponent: React.FC<InputProps> = ({ label, type, id, className, required, name, value, onChange, onKeyUp }) => {

    return(
        <Group>
            <Input
                data-testid='input-component'
                className={ className}
                type={type}
                value={value}
                id={id}
                required={required}
                name={name}
                onChange={onChange}
                onKeyUp={onKeyUp}
            />
            {
                label &&
                <InputLabel
                    shrink={value && value.length > 0? true:false} >
                    {label}
                </InputLabel>
            }
        </Group>
    )
}