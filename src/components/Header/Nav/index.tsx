import { Link } from 'react-router-dom';
import { ShoppingCart } from 'react-feather';
import styles from './style.module.css';

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

  const secondaryRoutes = [
    {
      icon: <ShoppingCart />,
      title: 'Shopping Cart',
      href: 'shopping-cart',
    },
  ];

  return (
    <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
      <div>
        {primaryRoutes.map((route, index) => {
          return (
            <Link
              key={index}
              to={route.href}
              onClick={() => {
                setIsActive(false);
              }}
            >
              {route.title}
            </Link>
          );
        })}
      </div>
      <div>
        {secondaryRoutes.map((route, index) => {
          return (
            <Link
              key={index}
              to={'/cart'}
              className={styles.icon}
              onClick={() => {
                setIsActive(false);
              }}
            >
              {route.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
