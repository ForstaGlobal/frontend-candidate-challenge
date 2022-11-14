import { faker } from '@faker-js/faker';
import { TodoStatus } from '../enums/TodoEnums';
import { Todo } from '../types/TodoTypes';
const uniqid = require('uniqid');

const FAKE_DATA_AMOUNT = 7;

const generateTodos = (amount: number): Todo[] => {
  const staticState = [
    { id: '1111', text: 'Hello world!', status: TodoStatus.PENDING, createdAt: new Date() }
  ]
  return staticState.concat(Array.from(Array(amount))
    .map((elm) => {
      return {
        id: String(uniqid()),
        status: TodoStatus.PENDING,
        text: faker.commerce.productName(),
        createdAt: faker.date.birthdate(),
      }
    }))
}

const getInitialTodos = (): Todo[] => generateTodos(FAKE_DATA_AMOUNT);

export {
  getInitialTodos
};