import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
   <div class="social-links">
      <a href="https://twitter.com" target="_blank" >Twitter</a>
      <div>
      <a href="https://linkedin.com" target="_blank">LinkedIn</a>

      </div>
      <div>
      <a href="https://facebook.com" target="_blank">Facebook</a>

      </div>
     
      
    </div>
      <p>&copy; {new Date().getFullYear()} Better.com. All rights reserved.</p>
    </footer>
    </>
    
  );
}