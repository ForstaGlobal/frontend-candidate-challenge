import React, { useEffect, useState } from 'react'
import { Modal, Box, TextField, Button, Grid, Typography, IconButton, Fade } from '@mui/material'
import { Clear as ClearIcon, Save as SaveIcon } from '@mui/icons-material';
import { useToasts } from 'react-toast-notifications';
import { Props } from '../todoModal/types'

const TodoModal = ({open, todo, onClose, onAddTodo, onUpdateTodo}: Props) => {
  const { addToast } = useToasts();
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const [value, setValue] = useState("");

  useEffect(() => {
    if(todo) {
      setValue(todo.text);
    }
    return () => setValue("");
  }, [todo])

  const handleSubmit = () => {
    if(value === "") {
      addToast('Please fill the todo input before submitting!', { appearance: 'error', autoDismiss: true });
      return;
    }

    if(todo) {
      onUpdateTodo(todo.id, value);
    } else {
      onAddTodo(value);
    }
    setValue("");
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style}>
          <IconButton onClick={onClose} color='error' sx={{ position: 'absolute', top: '6px', right: '6px' }}>
            <ClearIcon></ClearIcon>
          </IconButton>
          <Grid container>
            <Grid item xs={12} marginTop='2em'>
              <Typography textAlign='center' variant='h4' marginBottom='1em'>Create a new Todo</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField focused fullWidth placeholder='Type the todo title' value={value} onChange={e => setValue(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant='contained'
                size='large'
                startIcon={<SaveIcon/>}
                sx={{ marginTop: '1em', float: 'right' }}
                onClick={handleSubmit}
                >Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  )
}

export default TodoModal