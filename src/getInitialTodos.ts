import { faker } from '@faker-js/faker'
import { Todo } from './types'
const uniqid = require('uniqid')

const APPENDED_FAKE_DATA_AMOUNT = 10

const generateFakeTodos = (amount: number): Todo[] => Array.from(Array(amount)).map((x, i) => {
  return {
    id: uniqid(),
    done: faker.datatype.boolean(),
    text: faker.commerce.productName(),
    createdAt: faker.date.birthdate()
  }
})

const fakeTodos = [
  { id: '111', text: 'Buy milk', done: true, createdAt: new Date('2022-9-09') },
  { id: '222', text: 'Buy bread', done: false, createdAt: new Date('2022-9-10') },
  { id: '333', text: 'Buy Oats', done: false, createdAt: new Date('2022-9-10') },
  { id: '444', text: 'Organize finances', done: false, createdAt: new Date('2022-9-10') },
  { id: '5', text: 'Call a friend', done: false, createdAt: new Date('2022-9-10') },
  { id: '7', text: 'Do rope jumps at least!!', done: false, createdAt: new Date('2022-9-10') },
  { id: '6', text: 'Go for a run!', done: false, createdAt: new Date('2022-9-10') },
].concat(generateFakeTodos(APPENDED_FAKE_DATA_AMOUNT))

export function getInitialTodos (): Todo[] { return fakeTodos }
