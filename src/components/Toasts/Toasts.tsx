import clsx from 'clsx';

import { useToastContext } from '../Toasts/ToastContext';
import { ListItem } from '../ListItem/ListItem';

import styles from "./Toasts.module.scss";

export const ToastContainer = () => {
  const { getToasts, removeToast, onMouseEnter, onMouseLeave } = useToastContext();

  return (
    <div className={styles.container}>
      {getToasts().map(toast => (
        <ListItem 
          key={toast.id}
          id={toast.id}
          className={clsx(styles.toast, styles[toast.type])}
          text={toast.message}
          deleteItem={removeToast}
          onItemHover={onMouseEnter}
          onItemBlur={onMouseLeave}
        />
      ))}
    </div>
  );
};