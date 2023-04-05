import styles from './CostForm.module.css';

export const CostForm = (props) => {
  return (
    <form>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label>Название</label>
          <input type="text" />
        </div>
        <div className={styles.control}>
          <label>Сумма</label>
          <input type="number" min='0.01' step='0.01'/>
        </div>
        <div className={styles.control}>
          <label>Дата</label>
          <input type="date" min='2019-01-01' max='2024-01-01'/>
        </div>
      </div>
      <div className={styles.actions}>
        <button type='submit'>Добавить расход</button>
      </div>
    </form>
  );
};