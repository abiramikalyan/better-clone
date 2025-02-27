import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to Better.com</h1>
        <p>Your dream home is just a click away.</p>
      </main>
      <Footer />
    </div>
  );
}