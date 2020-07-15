import { BaseService } from "../base.service";
import { BenefitsZone } from "../../models/benefits/benefitZone.model";

export class BenefitZoneService extends BaseService<BenefitsZone> {
  reference: string = "zones";
  constructor() {
    super("zones");
  }
}
