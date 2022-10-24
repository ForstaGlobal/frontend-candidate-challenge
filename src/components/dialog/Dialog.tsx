import { Box, Modal } from '@mui/material'
import React from 'react'

import { Props } from './types'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
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
        {children}
      </Box>
    </Modal>
  );
};

export default Dialog
