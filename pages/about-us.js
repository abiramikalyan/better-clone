import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/AboutUs.module.scss';

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>About Us</h1>
        <p>
          At Better.com, we are revolutionizing the home-buying experience. Our mission is to make the process of
          purchasing a home simple, transparent, and stress-free. With cutting-edge technology and a team of dedicated
          professionals, we are committed to helping you find your dream home.
        </p>
        <p>
          Founded in 2016, Better.com has grown to become one of the leading digital mortgage platforms in the industry.
          We pride ourselves on our customer-first approach, offering personalized service and competitive rates to ensure
          you get the best deal possible.
        </p>
        <p>
          Whether you're a first-time homebuyer or looking to refinance, we're here to guide you every step of the way.
          Let us help you make your dream of homeownership a reality.
        </p>
      </main>
      <Footer />
    </div>
  );
}