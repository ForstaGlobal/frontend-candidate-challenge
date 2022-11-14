export interface Props {
  open: boolean;
  'data-testid': string;
  handleClose: () => void;
  onDeleteTodo: () => void;
}