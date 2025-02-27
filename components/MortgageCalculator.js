import { useState } from 'react';
import styles from '../styles/MortgageCalculator.module.scss';

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [term, setTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculatePayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const payments = term * 12;
    const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.inputGroup}>
        <label>Loan Amount ($)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Loan Term (Years)</label>
        <input
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <button className={styles.calculateButton} onClick={calculatePayment}>
        Calculate
      </button>
      <div className={styles.result}>
        <h3>Monthly Payment: ${monthlyPayment}</h3>
      </div>
    </div>
  );
}