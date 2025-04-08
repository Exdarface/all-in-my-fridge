// in-memory-shopping-list-repository.infrastructure.ts

import { v4 as uuidv4 } from 'uuid';
import {
  CreateShoppingListResult,
  RemoveShoppingListResult,
  ShoppingListRepository,
  UpdateShoppingListResult,
} from '../../../domain/repositories/shopping-list.repository';
import { ShoppingList } from '../../../domain/entities/shopping-list.entity';
import { Fridge } from '../../../domain/entities/fridge.entity';

export class InMemoryShoppingListRepository implements ShoppingListRepository {
  private readonly lists: Map<string, ShoppingList> = new Map();

  public async create(fridge: Fridge): Promise<CreateShoppingListResult> {
    const newId = uuidv4();
    const newShoppingList = new ShoppingList(newId, fridge);
    this.lists.set(newId, newShoppingList);

    return {
      success: true,
      shoppingList: newShoppingList,
    };
  }

  public async update(
    shoppingList: ShoppingList
  ): Promise<UpdateShoppingListResult> {
    const existingShoppingList = this.lists.get(shoppingList.id);
    if (!existingShoppingList) {
      return {
        success: false,
        message: `ShoppingList with ID '${shoppingList.id}' not found.`,
      };
    }
    // Overwrite stored list with the updated entity
    this.lists.set(shoppingList.id, shoppingList);

    return {
      success: true,
      shoppingList,
    };
  }

  public async remove(listId: string): Promise<RemoveShoppingListResult> {
    const existed = this.lists.delete(listId);
    if (!existed) {
      return {
        success: false,
        message: `ShoppingList with ID '${listId}' not found.`,
      };
    }
    return { success: true };
  }

  public async findById(listId: string): Promise<ShoppingList | undefined> {
    return this.lists.get(listId);
  }
}
