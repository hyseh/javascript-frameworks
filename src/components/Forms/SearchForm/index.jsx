import styles from './style.module.css';
import PrimaryButton from '../../Buttons/PrimaryButton';
import Input from './Input';

export default function SearchForm({ value, onChange }) {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <Input value={value} onChange={onChange} />
        <PrimaryButton>Search</PrimaryButton>
      </form>
    </div>
  );
}
