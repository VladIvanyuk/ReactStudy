import styles from "./Costs.module.css";
import { CostItem } from "./CostItem";
import { Card } from "../Card";
import { CostFilter } from "./CostFilter/CostFilter";
import { useState } from "react";

export const Costs = (props) => {
  const [year, setYear] = useState("");

  const costs = props.costs;
  console.log(costs)
  const changeYearHandler = (year) => {
    setYear(year);
  };

  const costsList = costs.map((el) => (
      <CostItem
        key={el.id}
        date={el.date}
        description={el.description}
        amount={el.amount}
      />
    )
  );

  return (
    <Card className={styles.costs}>
      <CostFilter year={year} onChangeYear={changeYearHandler} />
      {costsList}
    </Card>
  );
};
