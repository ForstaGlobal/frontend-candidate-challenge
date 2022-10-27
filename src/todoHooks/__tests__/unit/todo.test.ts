import { getInitialTodos } from "../../../getInitialTodos"
import { Todo } from "../../../types"
import { addTodo, deleteTodo, generateTodoFromText, toggleDone } from '../../utils'
import { expect } from 'chai'
describe('todo test', () => {
  it('initialize few example todos', () => {
    const todos: Todo[] = getInitialTodos()
    expect(todos.length).to.equal(17)

    todos.forEach((todo, i) => expect(todo).to.include.all.keys('text', 'done', 'createdAt'))
  })

  it('generate todo from text', () => {
    const todo: Todo = generateTodoFromText('todo from test')

    expect(todo).to.have.property('createdAt')
    expect(todo.done).to.be.false
  })

  it('can add todo generated from text - start position', () => {

    const todos: Todo[] = getInitialTodos()
    expect(todos.length).to.equal(17)
    const todo: Todo = generateTodoFromText('todo from test')
    const updatedTodos = addTodo(todos, todo)
    expect(updatedTodos.length).to.equal(18)

    expect(updatedTodos[0].text).to.equal('todo from test')
    expect(updatedTodos[0].done).to.be.false
  })

  it('can add todo generated from text - end position', () => {

    const todos: Todo[] = getInitialTodos()
    expect(todos.length).to.equal(17)
    const todo: Todo = generateTodoFromText('todo from test')
    const updatedTodos = addTodo(todos, todo, 'END')
    expect(updatedTodos.length).to.equal(18)

    expect(updatedTodos[17].text).to.equal('todo from test')
    expect(updatedTodos[17].done).to.be.false
  })

  it('can toggle todo done', () => {

    let todos: Todo[] = getInitialTodos()
    expect(todos[0].done).to.be.true
    todos = toggleDone(todos, todos[0].id)
    expect(todos[0].done).to.be.false

    todos = toggleDone(todos, todos[0].id)
    expect(todos[0].done).to.be.true
  })

  it('can delete todo', () => {

    let todos: Todo[] = getInitialTodos()
    expect(todos.length).to.equal(17)
    const todoToDelete: Todo = todos[2]
    todos = deleteTodo(todos, todoToDelete.id)
    expect(todos.length).to.equal(16)
    expect(todos).to.not.deep.include(todoToDelete)
  })
})