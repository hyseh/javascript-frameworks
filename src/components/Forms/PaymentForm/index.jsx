import styles from './style.module.css';
import Input from './Input';
import { Link } from 'react-router-dom';

export default function PaymentForm() {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.container}>
        <p className={styles.heading}>Contact details</p>
        <div className={styles.wrapper}>
          <Input label={'Your email'} name={'email'} type={'email'} />
        </div>
        <div className={styles.wrapper}>
          <Input label={'Phone'} name={'phone'} type={'tel'} />
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.heading}>Shipping address</p>
        <div className={styles.fullName}>
          <div className={styles.wrapper}>
            <Input label={'First name'} name={'firstName'} type={'text'} />
          </div>
          <div className={styles.wrapper}>
            <Input label={'Last name'} name={'lastName'} type={'text'} />
          </div>
        </div>
        <div className={styles.wrapper}>
          <Input label={'Address'} name={'address'} type={'text'} />
        </div>
        <div className={styles.wrapper}>
          <Input label={'City'} name={'city'} type={'text'} />
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.heading}>Payment details</p>
        <div className={styles.wrapper}>
          <Input label={'Card number'} name={'cardNumber'} type={'tel'} />
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.wrapper}>
            <Input label={'Expiration'} name={'cardExpiration'} type={'tel'} />
          </div>
          <div className={styles.wrapper}>
            <Input label={'CVC'} name={'cardVerification'} type={'tel'} />
          </div>
        </div>
      </div>
      <Link to={'/success'} className={styles.checkout}>
        Place Order
      </Link>
    </form>
  );
}
