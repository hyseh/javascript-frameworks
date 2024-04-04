import { useState } from 'react';
import styles from './style.module.css';
import { Menu } from 'react-feather';
import Nav from './Nav';
import CartButton from '../Cart/CartButton';
import CartMenu from '../Cart/CartMenu';

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="/">Header</a>
        </div>

        <div className={styles.mobile}>
          <CartButton isActive={isCartActive} setIsActive={setIsCartActive} />
          <button
            className={styles.menuButton}
            onClick={() => {
              setIsNavActive(!isNavActive);
            }}
          >
            <span className="sr-only">Open navigation menu</span>
            <Menu />
          </button>
        </div>

        <Nav isActive={isNavActive} setIsActive={setIsNavActive} />

        <div className={styles.desktop}>
          <CartButton isActive={isCartActive} setIsActive={setIsCartActive} />
        </div>

        {isCartActive && <CartMenu setIsActive={setIsCartActive} />}
      </div>
    </header>
  );
}
