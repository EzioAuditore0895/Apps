import { Base } from "../models/base.model";

export class BaseService<T extends Base | null> {
  private readonly Controller: string;

  constructor(controller: string) {
    this.Controller = controller;
  }

  getAll(callback?: any): T[] {
    return [];
  }

  public getById(id: string, callback?: any): T | null {
    return null;
  }

  public add(entity: T, callback?: any): void {}

  public edit(id: string, entity: T, callback?: any): void {}

  public delete(id: string, callback?: any): void {}
}
