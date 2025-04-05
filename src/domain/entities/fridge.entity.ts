import { Category } from "../value-objects/category.value-object";
import { Product } from "./product.entity";

export class Fridge {
  private products: Product[] = [];

  constructor(public readonly id: string) {}

  addProduct(product: Product): void {
    const existingProduct = this.products.find(p => p.name === product.name);
    if (existingProduct) {
      existingProduct.addQuantity(product.quantity.getValue());
    } else {
      this.products.push(product);
    }
  }

  removeProduct(product: Product): void {
    this.products = this.products.filter(p => p.name !== product.name);
  }

  getProductsFromCategory(category: Category): Product[] {
    return this.products.filter(p => p.category.name === category.name);
  }

  getProducts(): Product[] {
    return [...this.products];
  }
}