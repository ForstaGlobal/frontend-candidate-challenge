import { useEffect, useMemo, useState } from 'react'
import { Delete } from '@mui/icons-material'
import { Box, styled, TextField } from '@mui/material'
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
  }, onDelete, onToggleDone, onTodoUpdate } = props

  const TodoText = useMemo(() => styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'done' && prop !== 'textAlign'
  })((props: Pick<Todo, 'done'>) => ({
    textDecoration: props.done ? 'line-through' : 'none',
    '&:before': {
      borderBottom: 'none',
    },
  })), [])

  const [updatableText, setUpdatebleText] = useState<string>('')

  useEffect(() => {
    setUpdatebleText(text)
  }, [text])

  const onUpdatebleTextChange = (text: string) => {
    setUpdatebleText(text)
  }

  const saveTextUpdate = () => {
    onTodoUpdate(id, { ...props.todo, text: updatableText })
  }

  return (
    <StyledTodoItem data-testid={`todo_item_${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box onClick={() => onToggleDone(id)} data-testid={`todo_item_${id}_done`}>
        {done ? <DoneIcon data-testid={`todo_item_${id}_done_yes`} /> : <NotDoneIcon data-testid={`todo_item_${id}_done_no`} />}
      </Box>
      <TodoText
        done={done}
        value={updatableText}
        onChange={(e) => onUpdatebleTextChange(e.target.value)}
        onBlur={saveTextUpdate}
        variant='standard'
        InputProps={{ disableUnderline: true, }}
        inputProps={{
          style: { textAlign: 'center' },
          'data-testid': `todo_item_${id}_input`,
        }}
        key={`todo__${id}_input`}
        disabled={done}

      />
      <TodoActions
        isHidden={isHovered}
      >
        <Delete onClick={() => onDelete(id)} data-testid={`todo_item_${id}_delete`} />
      </TodoActions>
    </StyledTodoItem>
  )
}

export default TodoItem
