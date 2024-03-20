import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styles from './style.module.css';
import Input from './Input';
import Textarea from './Textarea';

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, 'Your name is too short')
      .max(50, 'Your name is too long')
      .required(),
    email: yup
      .string()
      .email('A valid email address is required')
      .required('A email address is required'),
    subject: yup
      .string()
      .min(3, 'The subject is too short')
      .max(100, 'The subject is too long')
      .required(),
    body: yup
      .string()
      .min(3, 'The message is too short')
      .max(1000, 'The message is too long')
      .required(),
  })
  .required();

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <Input
          label={'Full name'}
          placeholder={'Peter Parker'}
          register={register}
          name={'fullName'}
          options={{ required: true }}
          error={errors.fullName}
        />
        <p>{errors.fullName?.message}</p>
      </div>
      <div className={styles.wrapper}>
        <Input
          label={'Your email'}
          placeholder={'peter@spooderman.com'}
          register={register}
          name={'email'}
          options={{ required: true }}
          error={errors.email}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div className={styles.wrapper}>
        <Input
          label={'Subject'}
          placeholder={'Broken wind turbine'}
          register={register}
          name={'subject'}
          options={{ required: true }}
          error={errors.subject}
        />
        <p>{errors.subject?.message}</p>
      </div>
      <div className={styles.wrapper}>
        <Textarea
          label={'Your message'}
          placeholder={`Hello, I think I broke one of your wind turbines.. I swear it was an accident though! I'm really, really sorry.`}
          register={register}
          name={'body'}
          options={{ required: true }}
          error={errors.body}
        />
      </div>
      <button onClick={() => onSubmit}>Contact</button>
    </form>
  );
}
