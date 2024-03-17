import { Link } from 'react-router-dom';
import styles from './style.module.css';

export default function Nav({ isActive, setIsActive }) {
  const routes = [
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
      <ul>
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <Link
                to={route.href}
                onClick={() => {
                  setIsActive(false);
                }}
              >
                {route.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
