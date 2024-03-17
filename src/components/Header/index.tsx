import { useState } from 'react';
import styles from './style.module.css';
import Nav from './Nav';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <div className={styles.header}>
        <div>
          <a href="/" className={styles.logo}>
            Header
          </a>
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
