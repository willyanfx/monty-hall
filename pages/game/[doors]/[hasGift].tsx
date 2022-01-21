import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Door } from "../../../components/Door";
import {
  buildDoors,
  convertBinaryToNumber,
  updateDoors,
} from "../../../helpers";
import DoorModel from "../../../model/door";
import styles from "../../../styles/Game.module.css";

export default function Game() {
  const router = useRouter();
  const [valid, setValid] = useState(false);
  const [doors, setDoors] = useState<DoorModel[]>([]);

  useEffect(() => {
    const doors = Number(router.query.doors);
    const hasGift = convertBinaryToNumber(`${router.query.hasGift}`);
    console.log(hasGift);
    const qtyOfValidDoors = doors >= 3 && doors <= 100;

    setValid(qtyOfValidDoors);
  }, [doors, router.query.doors, router.query.hasGift]);

  useEffect(() => {
    const doors = Number(router.query.doors);
    const hasGift = convertBinaryToNumber(`${router.query.hasGift}`);
    console.log("HAS GIFT:::", hasGift);
    const grid = buildDoors(doors, hasGift);
    setDoors(grid);
  }, [router?.query]);

  function renderingDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
        />
      );
    });
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {valid ? renderingDoors() : <h1>Invalid value</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href='/' passHref>
          <button>Restart</button>
        </Link>
      </div>
    </div>
  );
}
