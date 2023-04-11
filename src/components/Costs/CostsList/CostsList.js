import styles from "./CostsList.module.css";
import { CostItem } from "../CostItem";

export const CostsList = (props) => {
  if (props.costs.length === 0) {
    return <p className={styles.costListFallback}>Расходы отстутствуют</p>;
  }

  return (
    <ul className={styles.costList}>
      {props.costs.map((el) => (
        <CostItem
          key={el.id}
          date={el.date}
          description={el.description}
          amount={el.amount}
        />
      ))}
    </ul>
  );
};
