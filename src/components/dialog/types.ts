export interface Props {
  handleClose: (event: React.MouseEvent<HTMLElement>) => void
  children: JSX.Element
  isOpen: boolean
}
