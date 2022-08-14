import styles from './FormField.module.scss';

interface FormFieldProps {
  onChange: (element: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  id: string;
  type: 'email' | 'password' | 'text';
}

export default function FormField({ onChange, value, label, id, type }: FormFieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} onChange={onChange} value={value}></input>
    </div>
  );
}
