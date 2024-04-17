import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import the styles
import colors from "../../styles/colors";

interface ProgressCircleProps {
  value: number;
}
const ProgressCircle: React.FC<ProgressCircleProps> = ({ value }) => {
  const style = buildStyles({
    textSize: "16px",
    pathColor: colors.lightPink,
    textColor: colors.lightPink,
    trailColor: colors.grey,
  });
  return (
    <div style={{ width: "100px", padding: "10px" }}>
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
