export class InvalidQuantityException extends Error {
  constructor(attemptedValue: number) {
    super(`Invalid quantity: ${attemptedValue} (must be a positive integer)`);
    Object.setPrototypeOf(this, InvalidQuantityException.prototype);
  }
}
