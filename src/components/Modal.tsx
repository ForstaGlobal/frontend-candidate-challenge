import React, { useEffect, useRef } from "react";

import { IoClose } from "react-icons/io5";

import "../styles/main.scss";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({
  title,
  isOpen,
  onClose,
  children,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={ref} onClose={() => onClose()}>
      <header>
        <h2>{title}</h2>
        <span className="modal-close" onClick={() => ref.current?.close()}>
          <IoClose size={24} />
        </span>
      </header>
      {children}
    </dialog>
  );
}
