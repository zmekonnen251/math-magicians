import Calculator from '../components/Calculator';
import styles from './CalculatorPage.module.css';
import NavBar from '../components/NavBar';

const CalculatorPage = () => (
  <>
    <NavBar />
    <main className={styles.homePageContainer}>
      <h2>Let&apos;s do some math!</h2>
      <Calculator className={styles.calculator} />
    </main>
  </>
);

export default CalculatorPage;
