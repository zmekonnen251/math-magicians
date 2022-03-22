import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home ',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
  },
  {
    id: 3,
    path: '/quote',
    text: '  Qoute',
  },
];

const NavBar = () => (
  <header className={styles.header}>
    <h1>Math Magicians</h1>
    <ul className={styles.nav}>
      {links.map((link) => (
        <li key={link.id} className={styles.onActive}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </header>
);

export default NavBar;
