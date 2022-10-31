export interface Props {
  handleClose: (e: React.MouseEvent<Element, MouseEvent>) => void
  children: JSX.Element
  isOpen: boolean
}
