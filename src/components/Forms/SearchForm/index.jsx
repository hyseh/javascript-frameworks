import styles from './style.module.css';
import Input from './Input';
import Button from './Button';
import { Search } from 'react-feather';

export default function SearchForm({ value, onChange }) {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <Input value={value} onChange={onChange} />
        <Button>
          <Search />
        </Button>
      </form>
    </div>
  );
}
