import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles

interface ProgressCircleProps {
    value: number;    
}
const ProgressCircle = ({ value }: ProgressCircleProps) => {
  return (
    <div style={{ width: '100px' }}>
      <CircularProgressbar
        background={true}
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: '#007bff',
          textColor: '#007bff',
          trailColor: '#f5f5f5',
        })}
      /> 
    </div>
  );
};

export default ProgressCircle;
