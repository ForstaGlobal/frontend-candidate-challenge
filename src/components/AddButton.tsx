import React from "react";

type Props = {
  setShow: any;
};

export const AddButton = ({ setShow }: Props) => {
  return (
    <button className="addButton" onClick={() => setShow(true)}>
      Add item
    </button>
  );
};
