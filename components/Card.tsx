import styles from "../styles/Card.module.css";

interface CardProps {
  backgroundColor?: string;
  children: React.ReactChildren;
}

function Card({ backgroundColor, children }: CardProps) {
  return (
    <div className={styles.card} style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
}

export { Card };
