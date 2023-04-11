import styles from './NewCost.module.css';
import { CostForm } from './CostForm'

export const NewCost = (props) => {

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }
    console.log(costData)
    props.onAddCost(costData);
  }

  return (
    <div className={styles.newCost}>
      <CostForm onSaveCostData={saveCostDataHandler}/>
    </div>
  );
};