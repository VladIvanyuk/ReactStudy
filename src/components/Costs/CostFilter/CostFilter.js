import styles from "./CostFilter.module.css";

export const CostFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className={styles.costFilter}>
      <div className={styles.costFilterControl}>
        <label>Выбор По Году</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
