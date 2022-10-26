import { Box, Grid, Modal } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react'

import { Props } from './types'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '4px solid darkviolet',
  boxShadow: 24,
  p: 4,
  padding: '7px',
}
const closeIconStyle = {
  color: 'red',
  width: '15px',
}

const Dialog = (props: Props) => {

  const { children, isOpen, handleClose } = props

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Box
          onClick={handleClose}>
          <CircleIcon style={closeIconStyle} data-testid='close-dialog-icon'/>
        </Box>
        {children}
      </Box>
    </Modal>
  );
};

export default Dialog
