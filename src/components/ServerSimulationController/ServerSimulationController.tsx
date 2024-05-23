import { ServerSimulationType } from "../../utils/serverSimulation";

import styles from "./ServerSimulationController.module.scss";

type ServerSimulationProp = {
  value: ServerSimulationType;
  onChange: (type: ServerSimulationType) => void;
}

export default function ServerSimulationController({ value, onChange }: ServerSimulationProp) {
  const serverSimulationTypes = [ServerSimulationType.Normal, ServerSimulationType.Slow, ServerSimulationType.Error];

  return (
    <div className={styles.radioGroup}>
      {
        serverSimulationTypes.map((type, i) => (
          <div key={i} className={`${styles.radioBlock} ${value === type ? styles.checked : ""}`}>
            <input 
              id={ServerSimulationType[type]} 
              className={styles.radio}
              type="radio"
              value={ServerSimulationType.Normal}
              checked={value === type}
              onChange={() => onChange(type)}
            />
            <label 
              htmlFor={ServerSimulationType[type]}
              className={styles.radioLabel}
            >
              {ServerSimulationType[type]}
            </label>
          </div>
        ))
      }
    </div>
  );
}
