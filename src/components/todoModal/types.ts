export interface Props {
  open: boolean,
  onClose: () => void,
  onAddTodo: (text: string) => void
}