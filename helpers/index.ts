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

function updateDoors(doors: DoorModel[], doorModified: DoorModel): DoorModel[] {
  return doors.map((actualDoor: DoorModel) => {
    const isModified = actualDoor.number === doorModified.number;
    console.log("MODIFIED", doorModified, "ISMODIFIED::", isModified);
    if (isModified) {
      return doorModified;
    }
    return doorModified.isOpen ? actualDoor : actualDoor.unselected();
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
