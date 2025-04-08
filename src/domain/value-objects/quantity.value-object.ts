// quantity.value-object.ts

import { InvalidQuantityException } from '../exceptions/invalid-quantity.exception';
export class Quantity {
  private constructor(public value: number) {}

  private static validate(value: unknown): value is number {
    return typeof value === 'number' && Number.isInteger(value) && value >= 0;
  }

  public static create(value: unknown): Quantity {
    if (!Quantity.validate(value)) {
      throw new InvalidQuantityException(value);
    }
    return new Quantity(value);
  }

  public add(value: unknown): Quantity {
    if (!Quantity.validate(value)) {
      throw new InvalidQuantityException(value);
    }
    return new Quantity(this.value + value);
  }

  public subtract(value: unknown): Quantity {
    if (!Quantity.validate(value)) {
      throw new InvalidQuantityException(value);
    }
    const newValue = this.value - value;
    if (newValue < 0) {
      throw new InvalidQuantityException(newValue);
    }
    return new Quantity(newValue);
  }
}
