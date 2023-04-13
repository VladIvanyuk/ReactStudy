import styles from "./Diagram.module.css";
import { DiagramBar } from "./DiagramBar";

export const Diagram = (props) => {
  const dataSetValues = props.dataSets.map((el) => el.value);
  const maxCostsMonthValue = Math.max(...dataSetValues);
  return (
    <div className={styles.diagram}>
      {props.dataSets.map((el) => (
        <DiagramBar key={el.label} value={el.value} maxValue={maxCostsMonthValue} label={el.label} />
      ))}
    </div>
  );
};
