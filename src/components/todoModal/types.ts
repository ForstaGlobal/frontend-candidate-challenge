export interface Props {
  open: boolean;
  todo?: { id: string, text: string };
  onClose: () => void;
  onAddTodo: (text: string) => void;
  onUpdateTodo: (id: string, text: string) => void;
}