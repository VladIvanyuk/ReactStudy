import styles from './NewCost.module.css';
import { CostForm } from './CostForm'

export const NewCost = (props) => {
  return (
    <div className={styles.newCost}>
      <CostForm />
    </div>
  );
};