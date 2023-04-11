import { CostDate } from "./CostDate/CostDate";
import styles from "./CostItem.module.css";
import { Card } from "../../Card";

export const CostItem = (props) => {
  return (
    <li>
      <Card className={styles.costItem}>
        <CostDate date={props.date} />
        <div className={styles.description}>
          <h2>{props.description}</h2>
          <div className={styles.price}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
