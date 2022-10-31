export interface Props {
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean
}