import styles from './style.module.css';

export default function Input({ label, name, type }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input className={styles.input} id={name} type={type} />
    </>
  );
}
