import { Button, Grid, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Props } from './types';

const StyledTodoInput = styled(
  TextField,
  {}
)(() => {
  return {};
});

const FormGrid = styled(
  Grid,
  {}
)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
  };
});

const NewTodoForm = (props: Props) => {

  const { onAdd } = props
  const [text, setText] = useState<string>('')

  return (
    <FormGrid container>
      <Typography id='modal-modal-title' variant='h6' component='h2'>
        Write down Todo
      </Typography>
      <StyledTodoInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant='standard'
        label=''
        inputProps={{ 'data-testid': 'new-todo-form' }}
      />
      <Button onClick={() => onAdd(text)}
        disabled={!text.length}
        data-testid='new-todo-form-submit'
      >Add to list!</Button>
    </FormGrid>
  )
}

export default NewTodoForm
