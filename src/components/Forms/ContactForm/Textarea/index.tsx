import styles from './style.module.css';

export default function Textarea({
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
      <textarea
        className={styles.textarea}
        id={name}
        placeholder={placeholder}
        {...register(name, { options })}
        aria-invalid={error ? 'true' : 'false'}
      ></textarea>
    </>
  );
}
