import styles from './Quote.module.css';
import NavBar from '../components/NavBar';

const Quote = () => (
  <>
    <NavBar />
    <div className={styles.quote}>
      <blockquote className={styles.quote}>
        Mathiematics is not about numbers,equations,computaions,or algorithms:
        it is about understanding.
        <em> -William Poul Thurston</em>
      </blockquote>
    </div>
  </>
);

export default Quote;
