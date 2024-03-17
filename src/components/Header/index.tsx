import { useState } from 'react';
import styles from './style.module.css';
import Nav from './Nav';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="/">Header</a>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          Menu
        </button>
        <Nav isActive={isActive} setIsActive={setIsActive} />
      </div>
    </header>
  );
}
