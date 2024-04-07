import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { X } from 'react-feather';

export default function Nav({ isActive, setIsActive }) {
  const primaryRoutes = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
      <div className={styles.header}>
        <p className={styles.heading}>Navigation</p>
        <button
          className={styles.closeButton}
          onClick={() => setIsActive(false)}
        >
          <span className="sr-only">Close navigation menu</span>
          <X />
        </button>
      </div>

      <div className={styles.wrapper}>
        {primaryRoutes.map((route, index) => {
          return (
            <Link
              key={index}
              to={route.href}
              className={styles.link}
              onClick={() => setIsActive(false)}
            >
              {route.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
