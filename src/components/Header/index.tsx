import { useState } from 'react';
import styles from './style.module.css';
import Nav from './Nav';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">Header</a>
      </div>
      <button className={styles.button} onClick={handleClick}>
        Menu
      </button>
      <Nav active={isActive} />
    </header>
  );
}
