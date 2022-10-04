import React from "react";

type Props = {
  setShow: any;
};

export const AddButton = ({ setShow }: Props) => {
  return (
    <button className="addButton" onClick={() => setShow(true)}>
      <h3>Add new chore</h3>
    </button>
  );
};
