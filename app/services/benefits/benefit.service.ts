import { Benefit } from "./../../models/benefits/benefit.model";
import { BaseService } from "../base.service";

export class BenefitService extends BaseService<Benefit> {
  constructor() {
    super("Computers");
  }
}
