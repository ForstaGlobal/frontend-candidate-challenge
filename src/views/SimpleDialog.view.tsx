import React from 'react';
import Draggable from 'react-draggable';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TestID } from 'testID';

const PaperComponent = ({ ...props }) => {
  const nodeRef = React.useRef(null);
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
      nodeRef={nodeRef}
    >
      <Paper ref={nodeRef} {...props} />
    </Draggable>
  );
};

export const SimpleDialog: React.FC<{
  open: boolean;
  handleClose: () => void;
  title: string;
  description: React.ReactNode;
}> = ({ open, handleClose, title, description }) => (
  <Dialog
    open={open}
    onClose={handleClose}
    PaperComponent={PaperComponent}
    aria-labelledby="draggable-dialog-title"
    sx={{ '& .MuiDialog-paper': { width: '60%', p: 2 } }}
    data-testid={TestID.SimpleDialog}
  >
    <DialogTitle
      style={{ cursor: 'move' }}
      id="draggable-dialog-title"
      data-testid={TestID.SimpleDialogTitle}
    >
      {title}
    </DialogTitle>
    <DialogContent>
      <Typography variant="body1" paragraph={false} variantMapping={{ body1: 'span' }}>
        {description}
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={handleClose}>
        OK
      </Button>
    </DialogActions>
  </Dialog>
);
