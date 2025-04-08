export class InvalidQuantityException extends TypeError {
  constructor(attemptedValue: unknown) {
    super(`Invalid quantity: ${attemptedValue} (must be a positive integer)`);
    Object.setPrototypeOf(this, InvalidQuantityException.prototype);
  }
}
