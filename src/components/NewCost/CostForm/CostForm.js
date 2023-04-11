import styles from './CostForm.module.css';
import { useState } from 'react';

export const CostForm = (props) => {

  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    }

    props.onSaveCostData(costData);

    setInputName('');
    setInputAmount('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label>Название</label>
          <input type="text" value={inputName} onChange={nameChangeHandler}/>
        </div>
        <div className={styles.control}>
          <label>Сумма</label>
          <input type="number" min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler}/>
        </div>
        <div className={styles.control}>
          <label>Дата</label>
          <input type="date" min='2019-01-01' max='2024-01-01' value={inputDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className={styles.actions}>
        <button type='submit'>Добавить расход</button>
      </div>
    </form>
  );
};