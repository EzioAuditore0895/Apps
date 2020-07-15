import { BaseService } from "../base.service";
import { Discount } from "../../models/discounts/discount.model";

export class DiscountService extends BaseService<Discount> {
  reference: string = "discounts";
  constructor() {
    super("discounts");
  }
}
