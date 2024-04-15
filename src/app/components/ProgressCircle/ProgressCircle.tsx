import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles

interface ProgressCircleProps {
    value: number;    
}
const ProgressCircle = ({ value }: ProgressCircleProps) => {
  const style= buildStyles({
    textSize: '16px',
    pathColor: '#ff24da',
    textColor: '#ff24da',
    trailColor: '#f5f5f5',
  });
  return (
    <div style={{ width: '100px' }}>
      <CircularProgressbar
        background={true}
        value={value}
        text={`${value}%`}
        styles={style}
      /> 
    </div>
  );
};

export default ProgressCircle;
