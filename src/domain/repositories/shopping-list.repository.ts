// shopping-list-repository.interface.ts

import { Fridge } from '../entities/fridge.entity';
import { ShoppingList } from '../entities/shopping-list.entity';

export type CreateShoppingListResult =
  | { success: true; shoppingList: ShoppingList }
  | { success: false; message: string };

export type UpdateShoppingListResult =
  | { success: true; shoppingList: ShoppingList }
  | { success: false; message: string };

export type RemoveShoppingListResult =
  | { success: true }
  | { success: false; message: string };

export interface ShoppingListRepository {
  create(fridge: Fridge): Promise<CreateShoppingListResult>;
  update(shoppingList: ShoppingList): Promise<UpdateShoppingListResult>;
  remove(listId: string): Promise<RemoveShoppingListResult>;
  findById(listId: string): Promise<ShoppingList | undefined>;
}
