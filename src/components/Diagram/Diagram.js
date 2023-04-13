import styles from "./Diagram.module.css";
import { DiagramBar } from "./DiagramBar";

export const Diagram = (props) => {
  return (
    <div className={styles.diagram}>
      {props.dataSets.map((el) => (
        <DiagramBar key={el.label} value={el.value} maxValue={null} label={el.label} />
      ))}
    </div>
  );
};
