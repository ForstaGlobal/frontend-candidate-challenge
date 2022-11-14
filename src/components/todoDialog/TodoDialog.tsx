import React from 'react'
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
import { Props } from './types';

const TodoDialog = ({open, onDeleteTodo, handleClose, "data-testid": dataTestid}: Props) => {

  const performDelete = () => {
    onDeleteTodo();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='xs' fullWidth>
      <DialogTitle margin='1.5em 0' textAlign='center'>Are you sure you want to delete this Todo?</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={performDelete} variant='contained' color='error' data-testid={dataTestid}>Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}

export default TodoDialog;
