import React from 'react'
import { Box, Typography } from '@mui/material'

const EmptyTodoList = () => {
  return (
    <Box
      borderRadius='10px'
      minHeight='80px'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      padding='.5em 1.5em'
      bgcolor='secondary.dark'
      >
        <Typography textAlign='center'>🎉 Great Job! All todos are completed 🎉</Typography>
      </Box>
  )
}

export default EmptyTodoList
