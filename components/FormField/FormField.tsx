import styles from './FormField.module.scss';

interface FormFieldProps {
  onChange: (element: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (element: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  id: string;
  type: 'email' | 'password' | 'text';
  error: string;
}

export default function FormField({ onChange, value, label, id, type, onBlur, error }: FormFieldProps) {
  return (
    <div className={`${styles.field} ${error && styles.error}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} onChange={onChange} value={value} onBlur={onBlur}></input>
      {error && <div className={styles.message}>{error}</div>}
    </div>
  );
}
