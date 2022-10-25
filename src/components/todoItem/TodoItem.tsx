import { useState } from 'react'
import { Delete } from '@mui/icons-material'
import { Box, styled, Typography } from '@mui/material'
import { Props } from './types'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { Todo } from '../../types'

interface TodoActionsProps {
  isHidden: boolean
}

const TodoActions = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isHidden'
})((props: TodoActionsProps) => ({
  visibility: props.isHidden ? 'visible' : 'hidden',
}))

const StyledTodoItem = styled(
  Box,
  {}
)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
  }
})

const DoneIcon = styled(CheckCircleOutlineIcon)(() => ({
  color: 'green',
}))

const NotDoneIcon = styled(RadioButtonUncheckedIcon)(() => ({
}))

const TodoItem = (props: Props) => {

  const [isHovered, setIsHovered] = useState<boolean>(false)

  const { todo: {
    text,
    id,
    done,
  }, onDelete, onToggleDone } = props

  const TodoText = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'done'
  })((props: Pick<Todo, 'done'>) => ({
    textDecoration: props.done ? 'line-through' : 'none',
  }))

  return (
    <StyledTodoItem data-testid={`todo_item_${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box onClick={() => onToggleDone(id)} data-testid={`todo_item_${id}_done`}>
        {done ? <DoneIcon data-testid={`todo_item_${id}_done_yes`} /> : <NotDoneIcon data-testid={`todo_item_${id}_done_no`}/>}
      </Box>
      <TodoText
        done={done}
      >{text}</TodoText>
      <TodoActions
        isHidden={isHovered}
      >
        <Delete onClick={() => onDelete(id)} data-testid={`todo_item_${id}_delete`}/>
      </TodoActions>
    </StyledTodoItem>
  )
}

export default TodoItem
