import { CostDate } from "./CostDate/CostDate";
import styles from "./CostItem.module.css";
import { Card } from "../../Card";
import { useState } from 'react';

export const CostItem = (props) => {

  const [description, setDescription] = useState(props.description);
  
  const changeDescrHandler = () => {
    setDescription('Новое значение');
    console.log(description)
  };
  
  return (
    <Card className={styles.costItem}>
      <CostDate date={props.date} />
      <div className={styles.description}>
        <h2>{description}</h2>
        <div className={styles.price}>${props.amount}</div>
      </div>
      <button onClick={changeDescrHandler}>Изменить описание</button>
    </Card>
  );
};
