import styles from "./Costs.module.css";
import { Card } from "../Card";
import { CostFilter } from "./CostFilter/CostFilter";
import { useState } from "react";
import { CostsList } from "./CostsList";
import { CostsDiagram } from "./CostsDiagram/CostsDiagram";

export const Costs = (props) => {
  const [year, setYear] = useState(2021);

  const costs = props.costs;
  const changeYearHandler = (year) => {
    setYear(year);
  };

  const filteredCosts = costs.filter((el) => el.date.getFullYear() === Number(year));

  return (
    <Card className={styles.costs}>
      <CostFilter year={year} onChangeYear={changeYearHandler} />
      <CostsDiagram costs={filteredCosts}/>
      <CostsList year={year} costs={filteredCosts}/>
    </Card>
  );
};
