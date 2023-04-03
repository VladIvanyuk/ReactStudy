import React from "react";
import styles from "./CostDate.module.css";

export const CostDate = (props) => {
  const month = props.date.toLocaleString("ru-RU", {
    month: "long",
  });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("ru-RU", {
    day: "2-digit",
  });

  return (
    <div className={styles["cost-date"]}>
      <div className={styles["cost-date__month"]}>{month}</div>
      <div className={styles["cost-date__year"]}>{year}</div>
      <div className={styles["cost-date__day"]}>{day}</div>
    </div>
  );
};
