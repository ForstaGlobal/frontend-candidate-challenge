import React from 'react';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import user from '@testing-library/user-event';
import { ToDoView } from '../view/to-do/to-do.view';

afterEach(
    () => {
        cleanup();
    }
);

describe("to-do-view", () => {

    it('should save two ToDos', () => {
        render(<ToDoView />);
        const ToDoViewElement = screen.getByTestId('to-do-view-container');
        expect(ToDoViewElement).toBeInTheDocument();

        const AddButtonElement = screen.getByText(/add/i);
        expect(AddButtonElement).toBeInTheDocument();
        const AddInputElement = screen.getByTestId('input-component');
        expect(AddInputElement).toBeInTheDocument();

        user.type(AddInputElement, 'Test first ToDo');
        user.click(AddButtonElement);

        let ItemListElement = screen.getAllByTestId('item-list-container');
        expect(ItemListElement.length).toBe(1);

        user.type(AddInputElement, 'Test second ToDo');
        user.click(AddButtonElement);

        ItemListElement = screen.getAllByTestId('item-list-container');
        expect(ItemListElement.length).toBe(2);
    });


    it('should at start save a ToDo and after delete it', () => {
        render(<ToDoView />);
        const ToDoViewElement = screen.getByTestId('to-do-view-container');
        expect(ToDoViewElement).toBeInTheDocument();

        const AddButtonElement = screen.getByText(/add/i);
        expect(AddButtonElement).toBeInTheDocument();
        const AddInputElement = screen.getByTestId('input-component');
        expect(AddInputElement).toBeInTheDocument();

        user.type(AddInputElement, 'Test first ToDo');
        user.click(AddButtonElement);

        let ItemListElement = screen.getAllByTestId('item-list-container');
        expect(ItemListElement.length).toBe(1);

        const DeleteSvgElement = screen.getByTestId('delete-svg-item-list');
        expect(DeleteSvgElement).toBeInTheDocument();

        user.click(DeleteSvgElement);
        expect(screen.queryByTestId('item-list-container')).toBeFalsy();
    });

    it('should should change the svg not-done to the svg done', () => {
        render(<ToDoView />);
        const ToDoViewElement = screen.getByTestId('to-do-view-container');
        expect(ToDoViewElement).toBeInTheDocument();

        const AddButtonElement = screen.getByText(/add/i);
        expect(AddButtonElement).toBeInTheDocument();
        const AddInputElement = screen.getByTestId('input-component');
        expect(AddInputElement).toBeInTheDocument();

        user.type(AddInputElement, 'Test first ToDo');
        user.click(AddButtonElement);

        let ItemListElement = screen.getAllByTestId('item-list-container');
        expect(ItemListElement.length).toBe(1);

        const NotDoneElement = screen.getByTestId('item-list-container-not-done');
        expect(NotDoneElement).toBeInTheDocument();

        expect(screen.queryByTestId('item-list-container-done')).toBeFalsy();

        user.click(NotDoneElement);

        const DoneElement = screen.getByTestId('item-list-container-done');
        expect(DoneElement).toBeInTheDocument();

        expect(screen.queryByTestId('item-list-container-not-done')).toBeFalsy();

    });


    it('should render no item in not-done area because there is only one of them in the to do list but it is done', () => {
        render(<ToDoView />);
        const ToDoViewElement = screen.getByTestId('to-do-view-container');
        expect(ToDoViewElement).toBeInTheDocument();

        const AddButtonElement = screen.getByText(/add/i);
        expect(AddButtonElement).toBeInTheDocument();
        const AddInputElement = screen.getByTestId('input-component');
        expect(AddInputElement).toBeInTheDocument();

        user.type(AddInputElement, 'Test first ToDo');
        user.click(AddButtonElement);

        let ItemListElement = screen.getAllByTestId('item-list-container');
        expect(ItemListElement.length).toBe(1);

        const NotDoneElement = screen.getByTestId('item-list-container-not-done');
        expect(NotDoneElement).toBeInTheDocument();

        expect(screen.queryByTestId('item-list-container-done')).toBeFalsy();

        user.click(NotDoneElement);

        const DoneElement = screen.getByTestId('item-list-container-done');
        expect(DoneElement).toBeInTheDocument();

        expect(screen.queryByTestId('item-list-container-not-done')).toBeFalsy();

        const NotDoneSwitchElement = screen.getByText('Not Done');
        expect(NotDoneSwitchElement).toBeInTheDocument();

        user.click(NotDoneSwitchElement);

        expect(screen.queryByTestId('item-list-container')).toBeFalsy();
    });

    it('should render one item in done area because there is only one of them in it', () => {
        render(<ToDoView />);
        const ToDoViewElement = screen.getByTestId('to-do-view-container');
        expect(ToDoViewElement).toBeInTheDocument();

        const AddButtonElement = screen.getByText(/add/i);
        expect(AddButtonElement).toBeInTheDocument();
        const AddInputElement = screen.getByTestId('input-component');
        expect(AddInputElement).toBeInTheDocument();

        user.type(AddInputElement, 'Test first ToDo');
        user.click(AddButtonElement);

        let ItemListElement = screen.getAllByTestId('item-list-container');
        expect(ItemListElement.length).toBe(1);

        const NotDoneElement = screen.getByTestId('item-list-container-not-done');
        expect(NotDoneElement).toBeInTheDocument();

        expect(screen.queryByTestId('item-list-container-done')).toBeFalsy();

        user.click(NotDoneElement);

        const DoneElement = screen.getByTestId('item-list-container-done');
        expect(DoneElement).toBeInTheDocument();

        expect(screen.queryByTestId('item-list-container-not-done')).toBeFalsy();

        const DoneSwitchElement = screen.getByText('Done');
        expect(DoneSwitchElement).toBeInTheDocument();

        user.click(DoneSwitchElement);

        ItemListElement = screen.getAllByTestId('item-list-container');
        expect(ItemListElement.length).toBe(1);
    });


    it('should update the item in the list', () => {
        render(<ToDoView />);
        const ToDoViewElement = screen.getByTestId('to-do-view-container');
        expect(ToDoViewElement).toBeInTheDocument();

        const AddButtonElement = screen.getByText(/add/i);
        expect(AddButtonElement).toBeInTheDocument();
        const AddInputElement = screen.getByTestId('input-component');
        expect(AddInputElement).toBeInTheDocument();

        user.type(AddInputElement, 'Test first ToDo');
        user.click(AddButtonElement);

        let ItemListElement = screen.getAllByTestId('item-list-container');
        expect(ItemListElement.length).toBe(1);

        const EditSVGElement = screen.getByTestId('edit-svg-item-list');
        expect(EditSVGElement).toBeInTheDocument();

        user.click(EditSVGElement);

        const InputList = screen.getAllByTestId('input-component');
        expect(InputList.length).toBe(2);

        fireEvent.change(InputList[1], { target: { value: '' } });
        user.type(InputList[1],'New ToDo');

        const EditConfirmButton = screen.getByText('Confirm');
        expect(EditConfirmButton).toBeInTheDocument();

        user.click(EditConfirmButton);

        const EditItemElement = screen.getByText('New ToDo');
        expect(EditItemElement).toBeInTheDocument();
        
    });
});