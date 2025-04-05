import { v4 as uuidv4 } from 'uuid';

import { Fridge } from "../../domain/entities/fridge.entity";
import { FridgeRepository, CreateFridgeResult, UpdateFridgeResult, RemoveFridgeResult } from "../../domain/repositories/fridge.repository";

export class InMemoryFridgeRepository implements FridgeRepository {
  private readonly fridges: Map<string, Fridge> = new Map();

  public async create(): Promise<CreateFridgeResult> {
    const id = uuidv4();
    const fridge = new Fridge(id);

    this.fridges.set(id, fridge);

    return {
      success: true,
      fridge,
    };
  }

  public async update(fridge: Fridge): Promise<UpdateFridgeResult> {
    const existing = this.fridges.get(fridge.id);
    if (!existing) {
      return {
        success: false,
        message: `Fridge with ID '${fridge.id}' not found.`,
      };
    }

    // Overwrite stored fridge with the updated instance.
    this.fridges.set(fridge.id, fridge);

    return {
      success: true,
      fridge,
    };
  }

  public async remove(fridgeId: string): Promise<RemoveFridgeResult> {
    const existed = this.fridges.has(fridgeId);
    if (!existed) {
      return {
        success: false,
        message: `Fridge with ID '${fridgeId}' not found.`,
      };
    }

    this.fridges.delete(fridgeId);
    return {
      success: true,
    };
  }

  /**
   * Find a Fridge by ID.
   * Returns undefined if not found.
   */
  public async findById(fridgeId: string): Promise<Fridge | undefined> {
    return this.fridges.get(fridgeId);
  }
}
