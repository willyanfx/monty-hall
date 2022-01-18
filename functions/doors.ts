import DoorModel from "../model/door";

function createDoors(qty: number, selected: number) {
  return Array.from({ length: qty }, (_, i) => {
    const number = i + 1;
    const hasGift = number === selected;
    return new DoorModel(number, hasGift);
  });
}

export { createDoors };
