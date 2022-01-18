import styles from "../styles/NumberInput.module.css";

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

function NumberInput({ text, value, onChange }: NumberInputProps) {
  const dec = () => onChange(value - 1);
  const inc = () => onChange(value + 1);
  return (
    <div className={styles.numberInput}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={dec}>
          -
        </button>
        <button className={styles.button} onClick={inc}>
          +
        </button>
      </div>
    </div>
  );
}

export { NumberInput };
