import {Document} from "mongodb";

export interface Todo {
    title: string
    _id: string
}

export interface TodoItem {
    title: string
    _id: string
    checked: boolean
    todo: string
}

export interface TodoDocument extends Todo, Document {}

export interface TodoItemDocument extends TodoItem, Document {}