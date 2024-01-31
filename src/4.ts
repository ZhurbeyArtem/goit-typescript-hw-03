class Key {
  private readonly signature: number
  constructor() {
    this.signature = Math.random()
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }

}
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  constructor(door: boolean, key: Key) {
    super(door, key);
  }

  openDoor(key: Key): boolean {
    return key.getSignature() === this.key.getSignature();
  }
}

const key = new Key();
const house = new MyHouse(true, key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);

export { };