import styles from './style.module.css';

export default function Input({
  label,
  placeholder,
  register,
  name,
  options,
  error,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.input}
        id={name}
        placeholder={placeholder}
        {...register(name, { options })}
        aria-invalid={error ? 'true' : 'false'}
      />
    </>
  );
}
