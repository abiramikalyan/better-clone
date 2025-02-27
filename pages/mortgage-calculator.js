import Header from '../components/Header';
import Footer from '../components/Footer';
import MortgageCalculator from '../components/MortgageCalculator';
import styles from '../styles/MortgageCalculator.module.scss';

export default function MortgageCalculatorPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 style={{textAlign:'center'}}>Mortgage Calculator</h1>
        <MortgageCalculator />
      </main>
      <Footer />
    </div>
  );
}