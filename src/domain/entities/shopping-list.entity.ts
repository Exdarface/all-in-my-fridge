import { Fridge } from './fridge.entity';
import { Product } from './product.entity';

export class ShoppingList {
  private products: Product[] = [];

  constructor(public readonly id: string, public readonly fridge: Fridge) {}

  addProduct(product: Product): void {
    const existingProduct = this.products.find((p) => p.name === product.name);
    if (existingProduct) {
      existingProduct.addQuantity(product.quantity.value);
    } else {
      this.products.push(product);
    }
  }

  removeProduct(product: Product, addToFridge: boolean): void {
    this.products = this.products.filter((p) => p.name !== product.name);

    if (addToFridge) {
      this.fridge.addProduct(product);
    }
  }

  clearList(): void {
    this.products = [];
  }

  getProducts(): Product[] {
    return [...this.products];
  }
}
