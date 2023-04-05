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
    <div className={styles.date}>
      <div className={styles.month}>{month}</div>
      <div className={styles.year}>{year}</div>
      <div className={styles.day}>{day}</div>
    </div>
  );
};
