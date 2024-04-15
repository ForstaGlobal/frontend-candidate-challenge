import React from "react";
import { toCamelCase } from "../../utils/utils";
import "./Chip.scss";

interface ChipProps {
  icon: string;
  title: string;
  onClick?: () => void;
}

const Chip: React.FC<ChipProps> = ({ icon, title, onClick }) => {
  const onChipClick = () => {
    onClick?.();
  };

  return (
    <span className="chip" onClick={onChipClick}>
      <i className={`bi ${icon} chip-icon`}></i> {toCamelCase(title)}
    </span>
  );
};

export default Chip;
