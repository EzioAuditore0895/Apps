import { BaseService } from "../base.service";
import { Category } from "../../models/categories/category.model";

export class CategoryService extends BaseService<Category> {
  reference: string = "categories";
  constructor() {
    super("categories");
  }
}
