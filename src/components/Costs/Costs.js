import styles from "./Costs.module.css";
import { CostItem } from "./CostItem";
import { Card } from "../Card";
import { CostFilter } from "./CostFilter/CostFilter";
import { useState } from "react";

export const Costs = (props) => {
  const [year, setYear] = useState('');

  const costs = props.costs;

  const changeYearHandler = (year) => {
    setYear(year);
  };

  return (
    <Card className={styles.costs}>
      <CostFilter year={year} onChangeYear={changeYearHandler}/>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />
    </Card>
  );
};
