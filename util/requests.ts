import axios, {AxiosResponse} from "axios";
import { TodoItemDocument, TodoDocument } from "../components/todo/interfaces";

export const fetchTodoList = async () => {
    try{
        return await axios.get<any, AxiosResponse<Array<TodoDocument>>>(`/api/todo`, { responseType: "json" })
    } catch (e) {
        console.log(e);
    }
}

export const createNewTodoList = async (title: string) => {
    try{
        return await axios.post(`/api/todo`, {title}, { responseType: "json"})
    } catch (e) {
        console.log(e)
    }
}

export const deleteTodoList = async (todoID: string) => {
    try {
        return await axios.delete(`/api/todo?todoID=${todoID}`, { responseType: "json"})
    } catch (e) {
        console.log(e)
    }
}

export const fetchTodoItemLists = async (todoListID: string) => {
    try{
        return await axios.get<any, AxiosResponse<Array<TodoItemDocument>>>(`/api/todoItems?todo=${todoListID}`, { responseType: "json"})
    } catch (e) {
        console.log(e)
    }
}

export const createNewTodoItem = async (todoListID: string, data: { title: string, checked: boolean}) => {
    try{
        return await axios.post(`/api/todoItems?todo=${todoListID}`, data, { responseType: "json"})
    } catch (e) {
        console.log(e)
    }
}

export const deleteNewTodoItem = async (todoItemID: string) => {
    try {
        return await axios.delete(`/api/todoItems?todoItemID=${todoItemID}`, { responseType: "json" });
    } catch (e) {
        console.error(e)
    }
}

export const setTodoItemCheck = async (todoItemID: string, checked: boolean) => {
    try{
        return await axios.put(`/api/todoItems?todoItemID=${todoItemID}`, {checked}, {responseType: "json"})
    } catch (e) {
        console.log(e)
    }
}