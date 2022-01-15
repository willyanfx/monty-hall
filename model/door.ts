export default class DoorModel {
  #number: number;
  #hasGift: boolean;
  #isSelected: boolean;
  #isOpen: boolean;
  constructor(
    number: number,
    hasGift = false,
    isSelected = false,
    isOpen = false
  ) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#isSelected = isSelected;
    this.#isOpen = isOpen;
  }

  get number(): number {
    return this.#number;
  }
  get hasGift(): boolean {
    return this.#hasGift;
  }
  get isSelected(): boolean {
    return this.#isSelected;
  }
  get isOpen(): boolean {
    return this.#isOpen;
  }
  get closed(): boolean {
    return !this.#isOpen;
  }

  unselected() {
    const isSelected = false;
    return new DoorModel(this.number, this.hasGift, isSelected, this.isOpen);
  }
  changeSelected() {
    const isSelected = !this.isSelected;
    return new DoorModel(this.number, this.hasGift, isSelected, this.isOpen);
  }
  open() {
    const isOpen = !this.isSelected;
    return new DoorModel(this.number, this.hasGift, this.isSelected, isOpen);
  }
}
