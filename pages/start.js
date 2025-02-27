import React from "react";
import Link from "next/link";
import styles from '../styles/Start.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Start = () => {
  return (
    <div className={styles.container}>
      <Header/>

      <main className={styles.main}>
        <div className={styles.card}>
          <h2 style={{color:"black"}}> Ready to Calculate Your Mortgage?</h2>
          <p style={{color:"black"}}>
            Use our easy-to-use mortgage calculator and discover how much you can save on your home financing.
          </p>
          <Link href="/mortgage-calculator">
            <button className={styles.startButton} style={{color:"black"}}>Get Started</button>
          </Link>
        </div>
      </main>

    <Footer/>
    </div>
  );
};

export default Start;
