import React from 'react'
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { Props } from './types';
import { Box, styled } from '@mui/system';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

interface IconProps{
  isHidden: boolean
}
const icon = (icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>) => styled(icon, {
  shouldForwardProp: (prop) => prop !== 'isHidden'
})((props: IconProps) => {
  const { isHidden } = props
  const style: Record<string, string> = {
    cursor: 'pointer',
  }
  if (isHidden) {
    style.fill = 'gray'
  }
  return style
})

const Undo = icon(UndoIcon)
const Redo = icon(RedoIcon)

const UndoRedo = (props: Props) => {
  const { undo, redo, canUndo, canRedo } = props

  return (
    <Box sx={{
      display: 'flex',
    }}>
      <Undo onClick={undo}
        isHidden={!canUndo}
      />
      <Redo onClick={redo}
        isHidden={!canRedo}
      />
    </Box>
  )
}

export default UndoRedo
