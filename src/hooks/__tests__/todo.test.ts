import { getInitialTodos } from "../../service/todoService"
import { Todo } from "../../types/TodoTypes"
import { generateTodo, addTodo, deleteTodo, toggleDone } from "../../helpers/todoHelper"
import { expect } from 'chai'
import { TodoStatus } from "../../enums/TodoEnums"

describe('todo test', () => {

  it('initialize few todo examples', () => {
    const todos: Todo[] = getInitialTodos()
    expect(todos.length).to.equal(8)
    todos.map((todo) => expect(todo).to.include.all.keys('text', 'status', 'createdAt'))
  })

  it('generate todo', () => {
    const todo: Todo = generateTodo('todo created from test')
    expect(todo).to.have.property('createdAt')
    expect(todo.status).to.be.equal(TodoStatus.PENDING)
  })

  it('can add generated todo - first in position', () => {
    const todos: Todo[] = getInitialTodos()
    const position = 0
    expect(todos.length).to.equal(8)
    const todo: Todo = generateTodo('todo created from test')
    const updatedTodos = addTodo(todos, todo)
    expect(updatedTodos.length).to.equal(9)
    expect(updatedTodos[position].text).to.equal('todo created from test')
    expect(updatedTodos[position].status).to.be.equal(TodoStatus.PENDING)
  })

  it('can toggle todo to done', () => {
    let todos: Todo[] = getInitialTodos()
    const position = 0
    expect(todos[position].status).to.be.equal(TodoStatus.PENDING)
    todos = toggleDone(todos, todos[position].id)
    expect(todos[position].status).to.be.equal(TodoStatus.COMPLETED)
    todos = toggleDone(todos, todos[position].id)
    expect(todos[position].status).to.be.equal(TodoStatus.PENDING)
  })

  it('can delete todo', () => {
    let todos: Todo[] = getInitialTodos()
    expect(todos.length).to.equal(8)
    const todoToDelete: Todo = todos[2]
    todos = deleteTodo(todos, todoToDelete.id)
    expect(todos.length).to.equal(7)
    expect(todos).to.not.deep.include(todoToDelete)
  })
})