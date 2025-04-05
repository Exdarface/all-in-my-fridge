// quantity.value-object.ts

import { InvalidQuantityException } from '../exceptions/invalid-quantity.exception';

export class Quantity {
  private readonly value: number;

  constructor(value: number) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new InvalidQuantityException(value);
    }
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }

  public add(amount: number): Quantity {
    return new Quantity(this.value + amount);
  }

  public subtract(amount: number): Quantity {
    return new Quantity(this.value - amount);
  }
}
