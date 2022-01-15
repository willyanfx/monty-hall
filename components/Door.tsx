import React, { SyntheticEvent } from "react";
import DoorModel from "../model/door";
import styles from "../styles/Door.module.css";

interface DoorProps {
  value: DoorModel;
  onChange?: (door: DoorModel) => void;
}

function Door({ value, onChange }: DoorProps): JSX.Element {
  const selected = value.isSelected && styles.selected;
  const open = (e: SyntheticEvent) => {
    e.stopPropagation();
    onChange(value.open());
  };
  const changeSelection = (e: SyntheticEvent) =>
    onChange(value.toggleSelection());

  const renderDoor = (): JSX.Element => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{value.number}</div>
        <div className={styles.handle} onClick={open}></div>
      </div>
    );
  };
  return (
    <div className={styles.area} onClick={changeSelection}>
      <div className={`${styles.frame} ${selected}`}>
        {value.isOpen ? null : renderDoor()}
      </div>
      <div className={styles.floor} />
    </div>
  );
}

export { Door };
