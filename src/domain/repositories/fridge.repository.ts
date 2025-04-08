import { Fridge } from '../entities/fridge.entity';

export type CreateFridgeResult =
  | { success: true; fridge: Fridge }
  | { success: false; message: string };

export type UpdateFridgeResult =
  | { success: true; fridge: Fridge }
  | { success: false; message: string };

export type RemoveFridgeResult =
  | { success: true }
  | { success: false; message: string };

export interface FridgeRepository {
  create(): Promise<CreateFridgeResult>;
  update(fridge: Fridge): Promise<UpdateFridgeResult>;
  remove(fridgeId: string): Promise<RemoveFridgeResult>;
  findById(fridgeId: string): Promise<Fridge | undefined>;
}
