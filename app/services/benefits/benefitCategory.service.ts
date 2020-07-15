import { BaseService } from "../base.service";
import { BenefitsCategory } from "../../models/benefits/benefitCategory.model";

export class BenefitCategoryService extends BaseService<BenefitsCategory> {
  reference: string = "categories";
  constructor() {
    super("categories");
  }
}
