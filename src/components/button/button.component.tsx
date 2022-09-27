import React from 'react';
import { BaseButton, InvertedButton } from './button.style';
import './button.style.tsx';

export type BUTTON_TYPE_CLASSES = 'base' | 'inverted';

const getButton = (buttonType: BUTTON_TYPE_CLASSES) => ({
    base: BaseButton,
    inverted: InvertedButton
}[buttonType])

interface MButtonProps {
    children?: string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    type?: "button" | "submit" | "reset" | undefined,
    button_style?: BUTTON_TYPE_CLASSES,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const MButton: React.FC<MButtonProps> = ({ children, type, button_style, onClick }) => {

    const CustomButton = getButton(button_style?button_style:'base' as BUTTON_TYPE_CLASSES);
    return (
        <CustomButton
            className={`button-container  ${button_style}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </CustomButton>
    )
}