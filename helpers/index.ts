import DoorModel from "../model/door";

function createDoors(qty: number, selected: number) {
  return Array.from({ length: qty }, (_, i) => {
    const number = i + 1;
    const hasGift = number === selected;
    return new DoorModel(number, hasGift);
  });
}

function buildDoors(qty: number, doorWithGift: number): DoorModel[] {
  return Array.from({ length: qty }, (_, i) => {
    const number = i + 1;
    const hasGift = number === doorWithGift;
    return new DoorModel(number, hasGift);
  });
}

function updateDoors(doors: DoorModel[], doorModified: DoorModel) {
  return doors.map((door) => {
    const isModified = door.number === doorModified;
    if (isModified) {
      return doorModified;
    }
    return doorModified.isOpen ? door : door.isSelected;
  });
}

function convertNumberToBinary(number: number): string {
  return String(number).charCodeAt(0).toString(2);
}
function convertBinaryToNumber(binary: string): number {
  return Number(String.fromCharCode(parseInt(binary, 2)));
}

function randomNumber(max: number) {
  return Math.floor(Math.random() * (max - 1));
}

export {
  createDoors,
  buildDoors,
  updateDoors,
  convertNumberToBinary,
  convertBinaryToNumber,
  randomNumber,
};
