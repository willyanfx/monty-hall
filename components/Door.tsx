import React from "react";
import DoorModel from "../model/door";
import styles from "../styles/Door.module.css";

interface DoorProps {
  door: DoorModel;
  onChange?: any;
}

function Door({ door, onChange }: DoorProps): JSX.Element {
  const selected = door.isSelected && styles.selected;

  const renderDoor = (): JSX.Element => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={`${styles.handle} ${selected}`}></div>
      </div>
    );
  };
  return (
    <div className={styles.area}>
      <div className={styles.frame}>{renderDoor()}</div>
      <div className={styles.floor} />
    </div>
  );
}

export { Door };
