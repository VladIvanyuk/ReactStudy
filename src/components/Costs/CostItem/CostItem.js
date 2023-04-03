import React from "react";
import { CostDate } from "./CostDate/CostDate";
import styles from "./CostItem.module.css";

export const CostItem = (props) => {
  return (
    <div className={styles["cost-item"]}>
      <CostDate date={props.date} />
      <div className={styles["cost-item__description"]}>
        <h2>{props.description}</h2>
        <div className={styles["cost-item__price"]}>${props.amount}</div>
      </div>
    </div>
  );
};
