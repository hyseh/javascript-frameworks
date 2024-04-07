import styles from './style.module.css';
import { CheckCircle } from 'react-feather';
import LinkButton from '../../components/Buttons/LinkButton';

export default function Success() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            <CheckCircle size={120} />
          </div>
          <p className={styles.heading}>Thank you for your order!</p>
          <p className={styles.paragraph}>
            <span>Your order number is: 833 855 888 333 555</span>
            <span>
              A order confirmation with details was sent to your email.
            </span>
          </p>
          <LinkButton to={'/'}>Continue shopping</LinkButton>
        </div>
      </div>
    </section>
  );
}
