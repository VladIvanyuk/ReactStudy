import styles from "./Costs.module.css";
import { CostItem } from "./CostItem";
import { Card } from "../Card";
import { CostFilter } from "./CostFilter/CostFilter";
import { useState } from "react";

export const Costs = (props) => {
  const [year, setYear] = useState(2021);

  const costs = props.costs;
  console.log(costs);
  const changeYearHandler = (year) => {
    setYear(year);
  };

  const costsList = costs
    .filter((el) => el.date.getFullYear() === Number(year))
    .map((el) => (
      <CostItem
        key={el.id}
        date={el.date}
        description={el.description}
        amount={el.amount}
      />
    ));

  let costsContent = <p>Расходы отстутствуют</p>;
  if (costsList.length > 0) {
    costsContent = costsList;
  }

  return (
    <Card className={styles.costs}>
      <CostFilter year={year} onChangeYear={changeYearHandler} />
      {costsContent}
    </Card>
  );
};
