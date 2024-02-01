class Key {
  private readonly signature: number = Math.random()

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) { }

  getKey(): Key {
    return this.key;
  }

}
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[];

  constructor(door: boolean, key: Key) { }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key): boolean {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      return true
    }
    return false
  }
}

const key = new Key();
const house = new MyHouse(true, key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);

export { };