import { Category } from '../value-objects/category.value-object';
import { Quantity } from '../value-objects/quantity.value-object';

export class Product {
  constructor(
    public readonly name: string,
    public quantity: Quantity,
    public readonly category: Category,
    public readonly image: string,
    public readonly description?: string
  ) {}

  addQuantity(amount: number): void {
    this.quantity = this.quantity.add(amount);
  }

  substractQuantity(amount: number): void {
    this.quantity = this.quantity.subtract(amount);
  }
}
