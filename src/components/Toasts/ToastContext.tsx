import { createContext, useContext, useState, ReactNode } from 'react';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

export enum ToastType {
  Default   = "default",
  Succuess  = "success",
  Dangerous = "dangerous",
}

interface ToastContextType {
  getToasts: () => Toast[];
  addToast: (message: string, type: ToastType) => void;
  removeToast: (id: string) => void;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

let toastId = 0;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [toastTimeoutIdMap, setToastTimeoutIdMap] = useState<{[key: string]: NodeJS.Timeout}>({});

  const getToasts = () => toasts;

  const addToast = (message: string, type: ToastType) => {
    const id = (toastId++).toString();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
    
    const timeoutId = setTimeout(() => removeToast(id), 3000);
    setToastTimeoutIdMap(prevValue => ({ ...prevValue, [id]: timeoutId}));
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const onMouseEnter = (id: string) => {
    clearTimeout(toastTimeoutIdMap[id]);
  };

  const onMouseLeave = (id: string) => {
    const timeoutId = setTimeout(() => removeToast(id), 1500);
    setToastTimeoutIdMap(prevValue => ({ ...prevValue, [id]: timeoutId }));
  };

  return (
    <ToastContext.Provider value={{ 
      getToasts,
      addToast,
      removeToast,
      onMouseEnter,
      onMouseLeave,
    }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }

  return context;
};

