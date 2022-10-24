import React from 'react'
import { styled } from '@mui/material';
import { Props } from './types';
import AddBoxIcon from '@mui/icons-material/AddBox';


const ShowAddtodoForm = (props: Props) => {

  const { onClick, text = 'New' } = props

  const StyledAddBtn = styled(AddBoxIcon)(() => {
    return {
      cursor: 'pointer'
    };
  });

  return <StyledAddBtn onClick={onClick}>{text}</StyledAddBtn>;
}

export default ShowAddtodoForm
