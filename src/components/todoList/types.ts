import { Todo } from '../../types'
import { Props } from '../todoItem/types'

export interface ListProps extends Omit<Props, 'todo'>{
  todos: Todo[]
}
